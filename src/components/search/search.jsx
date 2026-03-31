import './search.scss'
import Filter from '../dropdown/filter';
function Search({ searchTerm, setSearchTerm, selectedRegion, setSelectedRegion }) {

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Filter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      </div>
  );
}

export default Search;