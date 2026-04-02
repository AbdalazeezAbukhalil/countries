import { createPortal } from 'react-dom';
import styles from './countries.module.scss';
import { useTheme } from '../../src/context/ThemeContext';

function Country({ selectedCountry, setModalOpen }) {
    const { darkMode } = useTheme();

    const handleClick = () => {
        setModalOpen(false);
    };

    return createPortal(
        <div className={`${styles.modalContainer} ${darkMode ? styles.dark : ''}`} onClick={handleClick}>
            <div className={ styles.modalInfo }>
                <div className={ styles.countryInfo }>
                    {selectedCountry && (
                        <>
                            <h3>{selectedCountry.name?.common}</h3>
                            <div className={ styles.countryDetails }>
                                <h4>Population: {selectedCountry.population?.toLocaleString()}</h4>
                                <h4>Region: {selectedCountry.region}</h4>
                                <h4>Capital: {selectedCountry.capital ? selectedCountry.capital[0] : 'N/A'}</h4>
                                <img className={ styles.modalImage } src={selectedCountry.flags?.svg} alt={selectedCountry.name?.common} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>,
        document.body
    )
}
export default Country