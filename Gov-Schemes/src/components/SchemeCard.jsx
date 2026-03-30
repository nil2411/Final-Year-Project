export default function SchemeCard({ scheme, onView }) {
  const isAllYear = scheme.season && scheme.season.includes("All Year");

  return (
    <div className="scheme-card">
      <div>
        <h3>{scheme.scheme_name}</h3>

        <p>
          <strong>Component:</strong> {scheme.component_name}
        </p>

        <p>
          <strong>Benefit:</strong> {scheme.benefit.length > 80 ? scheme.benefit.substring(0, 80) + '...' : scheme.benefit}
        </p>

        <p>
          <strong>Category:</strong> {scheme.category}
        </p>

        <div className="badges-container">
          <span className="badge" style={{ background: scheme.level === 'NATIONAL' ? '#e3f2fd' : '#fbe9e7', color: scheme.level === 'NATIONAL' ? '#1565c0' : '#d84315' }}>
            {scheme.level === 'NATIONAL' ? "🇮🇳 National Scheme" : "📍 State Scheme"}
          </span>
          <span className="badge badge-season">
            {isAllYear
              ? "Available All Year"
              : `Season: ${scheme.season ? scheme.season.join(", ") : "N/A"}`}
          </span>
        </div>
      </div>

      <button className="view-btn" onClick={() => onView(scheme)}>
        View Details
      </button>
    </div>
  );
}
