import React, { useState, useEffect, useRef } from 'react';
import display from '../../assets/Display.svg';
import down from '../../assets/down.svg';

function DisplayButton({ grouping, sorting, onGroupingChange, onSortingChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleGroupingChange = (e) => {
    onGroupingChange(e.target.value);
    setIsOpen(false); 
  };

  const handleSortingChange = (e) => {
    onSortingChange(e.target.value);
    setIsOpen(false); 
  };

  return (
    <div className="display-button-container" ref={dropdownRef}>
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={display} alt="Menu" className="icon" />
        Display
        <img src={down} alt="Expand" className="icon" />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select value={grouping} onChange={handleGroupingChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="dropdown-item">
            <span>Ordering</span>
            <select value={sorting} onChange={handleSortingChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayButton;
