export default function LevelFilter({ level, setLevel }) {
  const levels = ["All", "STATE", "NATIONAL"];

  return (
    <div className="filter-group">
      <strong>Level:</strong>
      {levels.map((l) => (
        <button
          key={l}
          className={`chip ${level === l ? "active" : ""}`}
          onClick={() => setLevel(l)}
        >
          {l === "STATE" ? "State (Maharashtra)" : l === "NATIONAL" ? "Central (National)" : "All Levels"}
        </button>
      ))}
    </div>
  );
}
