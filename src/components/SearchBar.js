import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSearchButtonClick = () => {
        if (searchInput.trim() === "") {
            // Mostrar mensaje de error si no se ha ingresado texto
            setShowError(true);
        } else {
            // Redirige a la página de resultados con la consulta de búsqueda
            navigate(`/search-results?query=${searchInput}`);
        }
    };

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
        // Oculta el mensaje de error al ingresar texto
        if (showError) {
            setShowError(false);
        }
    };

    return (
        <div>
            <input
                className="search-input"
                type="text"
                placeholder="Buscar test..."
                value={searchInput}
                onChange={handleInputChange}
            />
            <a href={handleSearchButtonClick} className="search-button" onClick={handleSearchButtonClick}>
                <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt="Ícono de búsqueda" />
            </a>
            {showError && <p className="search-error">Ingresa una búsqueda</p>}
        </div>
    );
};

export default SearchBar;
