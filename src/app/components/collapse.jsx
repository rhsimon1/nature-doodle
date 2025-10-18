"use client";
import React, { useState } from 'react';


const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="collapsible-container">
      <div className="collapsible-title" onClick={toggleCollapse}>
        {title}
        <span style={{ marginLeft: '1px' }}>{isOpen ? '^' : '-'}</span>
      </div>
      {isOpen && (
        <div className="collapsible-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;