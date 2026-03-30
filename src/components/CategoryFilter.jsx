export default function CategoryFilter({ category, setCategory, categories }) {
  return (
    <div className="filter-group">
      <strong>Category:</strong>
      {categories.map((c) => (
        <button
          key={c}
          className={`chip ${category === c ? "active" : ""}`}
          onClick={() => setCategory(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
