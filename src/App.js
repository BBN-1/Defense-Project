import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Catalog from "./components/Catalog/Catalog";


function App() {
    return (
        <div className="App">
            <Header />
            <Catalog />
            {/* <Profile />
            <Register/>
            <Home />
            <Login/>  */}
        </div>
    );
}

export default App;
