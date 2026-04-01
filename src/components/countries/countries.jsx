import { useEffect, useState } from 'react';
import { fetchAllCountries } from '../../services/Countries'; 
import Country from './country';
import './countries.scss';

function Countries({ searchTerm, selectedRegion, modal, setModal }) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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

  if (selectedName && modalOpen) {
    setModal(true)
    return <Country selectedName={selectedName} setModalOpen={setModalOpen} setModal={setModal}/>;
  }

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "" || selectedRegion === "All" || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
        <div className='countries-grid'>
            {filteredCountries.map((country, index) => (
                <div key={index} className='country-card' onClick={() =>{setSelectedName(country.name.common);
          setModalOpen(true);}}>
                    <div className='country-image'>
                        {<img src={country.flags.svg} alt={country.name.common} />}
                    </div>
                    <div className='country-info'>
                        <h3>{country.name.common}</h3>
                        <div className='country-details'>
                        <h4>Population: {country.population.toLocaleString()}</h4>
                        <h4>Region: {country.region}</h4>
                        <h4>Capital: {country.capital ? country.capital[0] : 'N/A'}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Countries;