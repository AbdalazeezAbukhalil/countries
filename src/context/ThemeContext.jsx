import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? saved === 'true' : false;
    });

    useEffect(() => {
        document.body.className = darkMode ? 'dark' : 'light';
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

   const toggleDarkMode = () => setDarkMode(prev => !prev);
            return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);