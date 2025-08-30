// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">مرحبا بك</div>
      <div className="search">
        <input type="text" placeholder="بحث..." />
      </div>
    </nav>
  );
};

export default Navbar;
