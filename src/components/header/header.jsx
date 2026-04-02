import styles from './header.module.scss'
import { IoMoonOutline } from "react-icons/io5";

import { useTheme } from '../../context/ThemeContext';

function Header() {

    const { darkMode, toggleDarkMode } = useTheme();
   
    return (
        <div className={ styles.headerContainer}>
        <h1 className= {styles.headerText }>Where is the world?</h1>

        <div className={styles.darkModeContainer}>
        </div>
        
        <h2 className={`${styles.darkMode} ${styles.noHighlight}`} onClick={toggleDarkMode}>
            <IoMoonOutline />{darkMode ? 'Light Mode' : 'Dark Mode'}</h2>

        </div>
    )
}

export default Header