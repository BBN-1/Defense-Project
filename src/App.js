import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";



function App() {
    return (
        <div className="App">
            <Header />
            <Edit />
            <Create />
            <Catalog />
            <Profile />
            <Register/>
            <Home />
            <Login/> 
        </div>
    );
}

export default App;
