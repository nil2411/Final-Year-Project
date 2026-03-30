import { useState, useRef, useEffect } from "react";

export default function FilterDropdown({ label, icon, value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const isActive = value !== options[0]; // anything other than the default is "active"

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={`fdd-wrapper${open ? " fdd-open" : ""}`} ref={wrapperRef}>
      <button
        className={`fdd-trigger${isActive ? " fdd-trigger--active" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="fdd-trigger-icon">{icon}</span>
        <span className="fdd-trigger-label">{label}</span>
        {isActive && (
          <span className="fdd-trigger-value">{value}</span>
        )}
        <span className={`fdd-chevron${open ? " fdd-chevron--up" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="fdd-panel" role="listbox">
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <button
                key={opt}
                role="option"
                aria-selected={selected}
                className={`fdd-option${selected ? " fdd-option--selected" : ""}`}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              >
                {selected && <span className="fdd-check">✓</span>}
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
