import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import HomePage from './HomePage';
import TestsPage from './components/TestsPage';
import TestForm from './components/TestForm';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/tests' element={<TestsPage />} />
				<Route path='/tests/:testName' element={<TestForm />} />
			</Routes>
		</Router>
	);
}

export default App;
