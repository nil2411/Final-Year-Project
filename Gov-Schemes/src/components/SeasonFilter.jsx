const seasons = ["All Seasons", "Kharif", "Rabi", "Summer"];

export default function SeasonFilter({ season, setSeason }) {
  return (
    <div className="filter-group">
      <strong>Season:</strong>
      {seasons.map((s) => (
        <button
          key={s}
          className={`chip ${season === s ? "active" : ""}`}
          onClick={() => setSeason(s)}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
