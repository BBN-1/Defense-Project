import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
    return (
        <div className="App">
            <Header />
            <Register/>
            <Home />
            <Login/>
        </div>
    );
}

export default App;
