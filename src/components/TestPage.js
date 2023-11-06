import NavigationBar from "./NavBar";
import TestList from "./TestList";
import '../css/TestPage.css';

function TestPage() {
    return (
        <div className="page-container">
            <NavigationBar />
            <div className="testpage-body">
                <h1>Test</h1>
                <TestList />
            </div>
        </div>
    );
};
export default TestPage;