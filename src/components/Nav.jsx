import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const navStyle = {
  color: 'white'
};

export default function Nav() {
  return (
    <nav className="nav">
      <Link style={navStyle} to="/">
        <h3> DemoApp</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li> About</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li> Shop</li>
        </Link>
      </ul>
    </nav>
  );
}
