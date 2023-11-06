import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

function NavigationBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/tests'>Tests</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
