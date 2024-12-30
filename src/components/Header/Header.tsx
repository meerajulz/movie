import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faBell,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span className="text-xl md:text-3xl font-bold">TMDB</span>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#movies">Movies</a>
            </li>
            <li>
              <a href="#tvshows">TV Shows</a>
            </li>
            <li>
              <a href="#people">People</a>
            </li>
            <li>
              <a href="#more">More</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="md:hidden p-2">
          <i className="fas fa-bars"></i>
        </button>
        <button className="hidden md:inline-block p-2 rounded-full bg-blue-700">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <div className="hidden md:inline-block p-2">EN</div>
        <button className="p-2">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button className="p-2">
          {' '}
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="p-2">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </header>
  );
};

export default Header;
