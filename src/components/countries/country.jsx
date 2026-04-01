import { fetchCountryByName } from '../../services/Countries';
import { useState, useEffect } from 'react';

function Country({ selectedName, setModalOpen, setModal }) {
  const [country, setCountry] = useState({});
  useEffect(() => {
      const getData = async () => {
        try {
          const data = await fetchCountryByName(selectedName); 
          setCountry(data[0]);
        } catch (err) {
          setError(err);
        }
      };
      getData();
    }, []);

const handleClick = () => {
    setModal(false); 
    setModalOpen(false);
 };


    return (
        <div className='country-card' onClick={handleClick}>
            <div className='country-info'>
                <h3>{country.name?.common}</h3>
                <div className='country-details'>
                    <h4>Population: {country.population?.toLocaleString()}</h4>
                    <h4>Region: {country.region}</h4>
                    <h4>Capital: {country.capital ? country.capital[0] : 'N/A'}</h4>
                    <h4>subregion: {country.subregion}</h4>
                    <h4>area: {country.area}</h4>
                    <h4>fifa: {country.fifa}</h4>
                    <h4>timezones: {country.timezones}</h4>
                    <h4>googleMaps: {country.maps?.googleMaps}</h4>
                    <h4>openStreetMaps: {country.maps?.openStreetMaps}</h4>
                    <img className='modal-image' src={country.flags?.svg} alt={country.name?.common} />
                </div>
            </div>
        </div>
    )
}

export default Country