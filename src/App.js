import { Routes, Route } from "react-router-dom";
import { authContext } from "./contexts/authContext";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import Details from "./components/Details/Details";
import NotFound from "./components/404/NotFound";
import { Logout } from "./components/Logout/Logout";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";


function App() {

    const [auth, setLocalStorage] = useLocalStorage("auth",{});

    const userLogin = (authData) => {
        setLocalStorage(authData);
    }

    const userLogout = () => {
        setLocalStorage({});
    }

    return (
        <authContext.Provider value={{user: auth, userLogin, userLogout}}>
        <div className="App">
            <Header />

           <Routes>     
                <Route path="/" element={<Home />}/>
            
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:quoteId" element={<Details />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="*" element={<NotFound />}/>
             
            </Routes>

           
          
     
        </div>
        </authContext.Provider>
    );
}

export default App;
