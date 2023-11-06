import NavigationBar from "./components/NavBar";

function HomePage() {
    return (
        <div className="page-container">
            <NavigationBar />
            <h1>Bienvenido/a</h1>
            <div className="homepage-body">
            </div>
        </div>
    );
};
export default HomePage;