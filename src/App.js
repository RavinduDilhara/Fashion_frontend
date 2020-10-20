import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"

import Navigationbar from "./components/navigationbar";
import Home from "./components/home";
import Sellerlogin from "./components/sellers/sellerlogin";
import Adminlogin from "./components/admin/adminlogin";
import Sellerregister from "./components/sellers/sellerregister";
import Customerlogin from "./components/customers/customerlogin";
import Customerregister from "./components/customers/customerregister";
import Sellerprofile from "./components/sellers/sellerprofile";

function App() {
  return (
    <div>
        <Router>
            <Navigationbar/>
            <Route path="/" exact component={Home} />
            <Route path="/sellerLogin" exact component={Sellerlogin} />
            <Route path="/adminLogin" exact component={Adminlogin} />
            <Route path="/sellerregister" exact component={Sellerregister} />
            <Route path="/sellerprofile" exact component={Sellerprofile} />
        </Router>
    </div>
  );
}

export default App;
