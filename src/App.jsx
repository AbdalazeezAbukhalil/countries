import './App.css'
import { useState } from 'react'
import Countries from './api/Countries'
import Header from './components/header/header'
import Search from './components/search/search'
import Filter from './components/dropdown/filter'
function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  return (
    <>
     <Header selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}  />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
      <Countries searchTerm={searchTerm} selectedRegion={selectedRegion} />
    </>
  )
}

export default App
