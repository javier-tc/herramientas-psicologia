import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import '../css/SearchBar.css';
import SearchBar from './SearchBar';

function NavigationBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/test'>Lista de Test</Link>
                </li>
                <li className="search-bar-container">
                    <SearchBar />
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
