export default function SchemeModal({ scheme, onClose }) {
  if (!scheme) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{scheme.scheme_name}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <p>
          <strong>Component:</strong> {scheme.component_name}
        </p>

        <p>
          <strong>Benefit:</strong> {scheme.benefit}
        </p>

        <p>
          <strong>Eligibility:</strong> {scheme.eligibility}
        </p>

        <p>
          <strong>How to apply:</strong> {scheme.how_to_apply}
        </p>

        <p>
          <strong>Contact:</strong>
          <br />
          Office: {scheme.contact?.office}
          <br />
          Phone: {scheme.contact?.phone}
          <br />
          Website:{" "}
          <a
            href={scheme.contact?.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {scheme.contact?.website}
          </a>
        </p>

        <button className="view-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
