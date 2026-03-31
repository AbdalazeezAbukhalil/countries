
function Country({ country, setModalOpen }) {
    return (
        <div className='country-card' onClick={() => setModalOpen(false)}>
            <div className='country-info'>
                <h3>{country.name.common}</h3>
                <div className='country-details'>
                    <h4>Population: {country.population.toLocaleString()}</h4>
                    <h4>Region: {country.region}</h4>
                    <h4>Capital: {country.capital ? country.capital[0] : 'N/A'}</h4>
                    <h4>Currencies: {country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : 'N/A'}</h4>
                </div>
            </div>
        </div>
    )
}

export default Country