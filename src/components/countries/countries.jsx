import { useEffect, useState } from 'react';
import { fetchAllCountries } from '../../services/Countries'; 
import Country from '../../../CountryPackage/src/country';
import styles from './countries.module.scss';
import { useTheme } from '../../context/ThemeContext';

function Countries({ searchTerm, selectedRegion }) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const getData = async () => {
      try {
        const fields = [
        'name', 
        'population', 
        'region', 
        'flags', 
        'capital', 
        'currencies'
      ];
        const data = await fetchAllCountries(fields); 
        setCountries(data);
      } catch (err) {
        setError(err);
      }
    };
    getData();
  }, []);

  if (error) return <p>Error fetching countries</p>;

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "" || selectedRegion === "All" || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <>
    {selectedCountry && modalOpen && (
        <Country 
          selectedCountry = {selectedCountry}
          setModalOpen={setModalOpen} 
        />
      )}
        <div className={`${styles.countriesGrid} ${darkMode ? styles.dark : ''}`}>
          
            {filteredCountries.map((country, index) => (
                <div key={index} className= { styles.countryCard } onClick={() =>{setSelectedCountry(country); setModalOpen(true);}}>
                    <div className={ styles.countryImage }>
                        {<img src={country.flags.svg} alt={country.name.common} />}
                    </div>
                    <div className={ styles.countryInfo }>
                        <h3>{country.name.common}</h3>
                        <div className={ styles.countryDetails }>
                        <h4>Population: {country.population.toLocaleString()}</h4>
                        <h4>Region: {country.region}</h4>
                        <h4>Capital: {country.capital ? country.capital[0] : 'N/A'}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Countries;