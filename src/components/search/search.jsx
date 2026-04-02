import styles from './search.module.scss';
import Filter from '../dropdown/filter';
import { useTheme } from '../../context/ThemeContext'; 

function Search({ searchTerm, setSearchTerm, selectedRegion, setSelectedRegion }) {
  const { darkMode } = useTheme();

  return (
    <div className={`${styles.search} ${darkMode ? styles.dark : ''}`}>
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