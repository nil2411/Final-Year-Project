import { useState, useEffect } from "react";

const LANGUAGES = [
  { code: "en", label: "EN",  full: "English" },
  { code: "hi", label: "हि", full: "हिंदी"  },
  { code: "mr", label: "म",  full: "मराठी"  },
];

const STORAGE_KEY = "govscheme_lang";

// ─── Cookie helpers ────────────────────────────────────────────────────────────
function setGoogTransCookie(langCode) {
  const pair = langCode === "en" ? "/en/en" : `/en/${langCode}`;
  // Set on all domain variants so localhost and production both pick it up
  const domains = [
    window.location.hostname,
    `.${window.location.hostname}`,
    "",
  ];
  domains.forEach((d) => {
    const domainPart = d ? `; domain=${d}` : "";
    document.cookie = `googtrans=${pair}; path=/${domainPart}`;
  });
}

function getActiveFromCookie() {
  const m = document.cookie.match(/googtrans=\/en\/(\w+)/);
  if (!m) return "en";
  return m[1] === "en" ? "en" : m[1];
}

// ─── Two-strategy translation ──────────────────────────────────────────────────
// Strategy 1 (preferred, no reload): drive GT's hidden <select>
// Strategy 2 (fallback):             set cookie + reload
function applyLanguage(code) {
  // Always persist intent
  localStorage.setItem(STORAGE_KEY, code);
  setGoogTransCookie(code);

  // Try programmatic approach first (works when GT has fully initialized)
  const select = document.querySelector("select.goog-te-combo");
  if (select) {
    select.value = code;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    return; // done — no reload needed
  }

  // GT select not ready yet (or never injected) → reload; GT reads cookie on load
  window.location.reload();
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function LanguageSwitcher() {
  // Determine active language: localStorage wins, then cookie
  const savedLang = localStorage.getItem(STORAGE_KEY);
  const cookieLang = getActiveFromCookie();
  const initialLang =
    savedLang && LANGUAGES.find((l) => l.code === savedLang)
      ? savedLang
      : cookieLang;

  const [active, setActive] = useState(initialLang);

  // On first load, if a saved non-English language exists, trigger GT via select
  // (the page was loaded fresh; GT may need a small delay to inject its select)
  useEffect(() => {
    if (active !== "en") {
      let attempts = 0;
      const iv = setInterval(() => {
        attempts++;
        const select = document.querySelector("select.goog-te-combo");
        if (select && select.value !== active) {
          select.value = active;
          select.dispatchEvent(new Event("change", { bubbles: true }));
          clearInterval(iv);
        } else if (attempts > 60) {
          clearInterval(iv); // give up after 6 s
        }
      }, 100);
      return () => clearInterval(iv);
    }
  }, []); // run once on mount

  function handleClick(code) {
    if (code === active) return; // already selected
    setActive(code);
    applyLanguage(code);
  }

  return (
    <div className="lang-switcher" aria-label="Choose language">
      <span className="lang-switcher-icon" aria-hidden="true">🌐</span>
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          title={l.full}
          className={`lang-btn${active === l.code ? " lang-btn--active" : ""}`}
          onClick={() => handleClick(l.code)}
          aria-pressed={active === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
