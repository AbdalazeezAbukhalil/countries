import axios from 'axios'
import { useEffect, useState } from 'react'
import '../components/countries/countries.scss'
import Country from '../components/countries/country'
function Countries({ searchTerm, selectedRegion }) {
    const [countries, setCountries] = useState([])
    const [error, setError] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)

    const url = 'https://restcountries.com/v3.1/all?fields=name,population,region,flags,capital,currencies';

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(url);
                setCountries(response.data)
            }
            catch (error) {
                setError(error)
            }
        }
        getData()
    }, [])

    if (error) return <p>Error fetching countries</p>

    const handlecountryclick = (country) => {
        setSelectedCountry(country)
        setModalOpen(true)
    }

    if (selectedCountry && modalOpen) {
        
        return <Country country={selectedCountry} setModalOpen={setModalOpen} />
    }
    
     const filteredCountries = countries.filter(country => {
         const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
         const matchesRegion = selectedRegion === "" || country.region === selectedRegion;
         return matchesSearch && matchesRegion;
     });
    return (
        <div className='countries-grid'>
            {filteredCountries.map((country, index) => (
                <div key={index} className='country-card' onClick={() => handlecountryclick(country)}>
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

export default Countries