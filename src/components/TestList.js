import testList from './testList.json';
import { useNavigate } from 'react-router-dom';
import '../css/TestList.css';


function TestList() {
    const navigate = useNavigate();

    const navigateToTestForm = (testName) => {
        navigate(`/test/${testName}`);
    };

    const testElements = testList.test.map((test, index) => (
        <div className='test' key={index}>
            <h3>{test.name}</h3>
            <div className='test-description'>
                {test.description}
            </div>
            <button className='realizar-button' onClick={() => navigateToTestForm(test.name)}>Realizar Test</button>
        </div>
    ));

    return (
        <div className="test-list-container">
            {testElements}
        </div>
    )
}
export default TestList;