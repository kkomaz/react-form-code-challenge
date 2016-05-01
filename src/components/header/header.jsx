import React from 'react';
import { Link } from 'react-router';

export default function Header() {
  return (
    <div className="header">
      <nav className="header__links">
        <Link to="/" className="header__link">Front Page</Link>

        <a href="#" className="header__link">Politics</a>

        <a href="#" className="header__link">Entertainment</a>

        <a href="#" className="header__link">What's Working</a>

        <Link to="/newsletter" className="header__link">Newsletter</Link>
      </nav>
    </div>
  );
}
