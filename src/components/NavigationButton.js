import React from 'react';

const NavigationButton = ({ name, url }) => {
  return (
    <a href={url}>
      <button>{name}</button>
    </a>
  );
}

export default NavigationButton;
