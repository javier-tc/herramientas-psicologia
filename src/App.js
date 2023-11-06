import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import HomePage from './HomePage';
import TestPage from './components/TestPage';
import TestForm from './components/TestForm';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/test' element={<TestPage />} />
				<Route path='/test/:testName' element={<TestForm />} />
			</Routes>
		</Router>
	);
}

export default App;
