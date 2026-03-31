import './header.scss'
import { FiMoon } from 'react-icons/fi';
import { useState } from 'react'
import { useEffect } from 'react'

function Header() {

    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? saved === 'true' : false;
    });
    
    useEffect(() => {
        document.body.className = darkMode ? 'dark' : '';
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const handledarkmode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className='header-container'>
        <h1 className='header-text'>Where is the world?</h1>

        <div className='dark-mode-container'>
        </div>
        <div className={darkMode ? 'dark' : ''}>
        
        <h2 className='dark-mode' onClick={handledarkmode}><FiMoon className='dark-mode-icon' />{darkMode ? 'Light Mode' : 'Dark Mode'}</h2>
        </div>

        </div>
    )
}

export default Header