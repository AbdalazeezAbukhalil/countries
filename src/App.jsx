import './App.css'
import { useState } from 'react'
import Countries from './components/countries/countries'
import Header from './components/header/header'
import Search from './components/search/search'
import { useTheme } from './context/ThemeContext'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const { darkMode } = useTheme();

  return (
    <div className={`appWrapper ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
      <Countries searchTerm={searchTerm} selectedRegion={selectedRegion}/>
    </div>
  )
}

export default App
