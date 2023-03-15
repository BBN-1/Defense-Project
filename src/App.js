import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import LatestQuote from "./components/Home/LatestQuote/LatestQuote";
import Details from "./components/Details/Details";
import NotFound from "./components/404/NotFound";


function App() {
    return (
        <div className="App">
            <Header />

           <Routes>     
                <Route path="/" element={<Home />}/>
            
                <Route path="/details" element={<Details />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/create" element={<Create />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />}/>
             
            </Routes>

           
          
     
        </div>
    );
}

export default App;
