import '../search/search.scss'
function Filter({ selectedRegion, setSelectedRegion }) {
  return (
    <div className="filter">
      <select value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;