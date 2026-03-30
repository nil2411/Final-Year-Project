export default function SearchBar({ query, setQuery, placeholder = "Search for schemes, benefits, components..." }) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
