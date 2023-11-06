import NavigationBar from "./NavBar";
import TestsList from "./TestsList";
import '../css/TestPage.css';

function TestsPage() {
    return (
        <div className="page-container">
            <NavigationBar />
            <div className="testpage-body">
                <h1>Tests</h1>
                <TestsList />
            </div>
        </div>
    );
};
export default TestsPage;