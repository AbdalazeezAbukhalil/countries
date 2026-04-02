import './App.css'
import { useState } from 'react'
import Countries from './components/countries/countries'
import Header from './components/header/header'
import Search from './components/search/search'
function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [modal, setModal] = useState(false);
  return (
    <>
    {/* why passing not needed props ? */}
     <Header selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}  />
     { modal ? <div style={{padding: '60px'}}></div> : <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/> }
      <Countries searchTerm={searchTerm} selectedRegion={selectedRegion} modal={modal} setModal= {setModal}/>
    </>
  )
}

export default App
