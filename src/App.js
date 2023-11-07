import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import HomePage from './HomePage';
import TestPage from './components/TestPage';
import TestForm from './components/TestForm';
import SearchResultsPage from './components/SearchResultsPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/test' element={<TestPage />} />
				<Route path='/test/:testName' element={<TestForm />} />
				<Route path='/search-results' element={<SearchResultsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
