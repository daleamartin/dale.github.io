import React from 'react';
import { Link } from 'react-router-dom';

const NavigationButton = ({ menuItems }) => {
  return (
    <nav>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationButton;
