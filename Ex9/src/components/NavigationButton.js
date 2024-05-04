import React from 'react';

const NavigationButton = ({ name, onClick }) => {
  return (
    <button className="navigation-button" onClick={onClick}>
      {name}
    </button>
  );
}

export default NavigationButton;
