import { useState, useEffect, useMemo } from "react";
import { loadAllSchemes } from "../utils/loadSchemes";
import FilterDropdown from "../components/FilterDropdown";
import SearchBar from "../components/SearchBar";
import SchemeCard from "../components/SchemeCard";
import SchemeModal from "../components/SchemeModal";
import NewsTicker from "../components/NewsTicker";
import LanguageSwitcher from "../components/LanguageSwitcher";

const SEASONS = ["All Seasons", "Kharif", "Rabi", "Zaid"];
const LEVELS  = ["All", "STATE", "NATIONAL"];
const LEVEL_LABELS = {
  "All": "All Levels",
  "STATE": "State (Maharashtra)",
  "NATIONAL": "Central (National)",
};

const allSchemes = loadAllSchemes();

export default function Home() {
  const [season, setSeason] = useState("All Seasons");
  const [level, setLevel] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [displaySchemes, setDisplaySchemes] = useState([]);

  const filteredSchemes = useMemo(() => {
    return allSchemes.filter((scheme) => {
      const levelMatch = level === "All" || scheme.level === level;

      const seasonMatch =
        season === "All Seasons" ||
        (scheme.season &&
          (scheme.season.includes(season) ||
           scheme.season.includes("All Year")));

      const q = query.toLowerCase();
      const searchMatch =
        !q ||
        (scheme.scheme_name && scheme.scheme_name.toLowerCase().includes(q)) ||
        (scheme.component_name && scheme.component_name.toLowerCase().includes(q)) ||
        (scheme.benefit && scheme.benefit.toLowerCase().includes(q));

      return levelMatch && seasonMatch && searchMatch;
    });
  }, [season, query, level]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setDisplaySchemes(filteredSchemes);
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [filteredSchemes]);

  return (
    <div className="app-container">
      {/* Header */}
      <div className="app-header">
        <div className="app-header-top">
          <div className="app-header-text">
            <h1>Maharashtra Agriculture Schemes</h1>
            <p>
              Browse official government schemes, check eligibility, and contact
              the responsible authority
            </p>
          </div>
          {/* Google Translate–powered language switcher */}
          <LanguageSwitcher />
        </div>
      </div>

      {/* PM-Kisan Live News Ticker */}
      <NewsTicker />

      {/* Filters */}
      <div className="filters">
        <FilterDropdown
          label="Level"
          icon="🗺️"
          value={LEVEL_LABELS[level] ?? level}
          options={LEVELS.map((l) => LEVEL_LABELS[l])}
          onChange={(label) =>
            setLevel(Object.keys(LEVEL_LABELS).find((k) => LEVEL_LABELS[k] === label))
          }
        />
        <FilterDropdown
          label="Season"
          icon="🌾"
          value={season}
          options={SEASONS}
          onChange={setSeason}
        />
      </div>

      {/* Search */}
      <SearchBar query={query} setQuery={setQuery} />

      <p style={{ marginTop: "10px", marginBottom: "15px" }}>
        Showing <strong>{filteredSchemes.length}</strong> schemes
        {isLoading && (
          <span style={{ marginLeft: "10px", color: "#1b5e20" }}>
            (Updating...)
          </span>
        )}
      </p>

      {/* Scheme Grid */}
      <div
        className="scheme-grid"
        style={{ opacity: isLoading ? 0.6 : 1, transition: "opacity 0.2s" }}
      >
        {displaySchemes.length === 0 && !isLoading ? (
          <p>No schemes found for the selected filters.</p>
        ) : (
          displaySchemes.map((scheme, index) => (
            <SchemeCard key={index} scheme={scheme} onView={setSelectedScheme} />
          ))
        )}
      </div>

      {/* Modal */}
      <SchemeModal
        scheme={selectedScheme}
        onClose={() => setSelectedScheme(null)}
      />
    </div>
  );
}
