// SearchResultsPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavBar';
import testList from './testList.json';

function SearchResultsPage() {
    const navigate = useNavigate();
    const navigateToTestForm = (testName) => {
        navigate(`/test/${testName}`);
    };

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const query = queryParams.get('query');

    // Aquí debes realizar la búsqueda en tu conjunto de datos (por ejemplo, testList) y filtrar los resultados basados en la consulta.
    // Supongamos que tienes una función llamada searchInTestList que realiza la búsqueda.

    const searchInTestList = (query, testList) => {
        const lowerCaseQuery = query.toLowerCase();
        return testList.test.filter(
            (test) =>
                test.name.toLowerCase().includes(lowerCaseQuery) ||
                test.description.toLowerCase().includes(lowerCaseQuery)
        );
    };

    // Realiza la búsqueda en testList
    const searchResults = searchInTestList(query, testList);

    return (
        <div className='page-container'>
            <NavigationBar />
            <div className='testpage-body'>
                <h2>Resultados de búsqueda para "{query}"</h2>
                {searchResults.length > 0 ? (
                    <div className="test-list-container">
                        {searchResults.map((test, index) => (
                            <div className="test" key={index}>
                                <h3>{test.name}</h3>
                                <div className="test-description">{test.description}</div>
                                <button
                                    className="realizar-button"
                                    onClick={() => navigateToTestForm(test.name)}
                                >
                                    Realizar Test
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No se encontraron resultados.</p>
                )}
            </div>
        </div>
    );
}

export default SearchResultsPage;
