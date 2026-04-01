import { useState } from 'react';
import '../search/search.scss';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

function Filter({ selectedRegion, setSelectedRegion }) {
  const [isOpen, setIsOpen] = useState(false);
  const regions = ['All','Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const handleSelect = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };

  return (
    <div className="filter no-highlight">
      <div className="select" onClick={() => setIsOpen(!isOpen)}>
        <span>
          {selectedRegion || "Filter by Region"}
        </span>
        
         {isOpen ?  <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/> } 
      </div>

      {isOpen && (
        <ul className="regions-list">
          {regions.map((region) => (
            <li 
              key={region} 
              onClick={() => handleSelect(region)}
              className={selectedRegion === region ? 'active' : ''}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;