import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navigationbar extends Component{
    render() {
        return (
            <div className="row" style={{backgroundColor: "#FDEDEC"}}>
            <nav style={{backgroundColor: "#FDEDEC"}} className="navbar navbar-dark navbar-expand-lg">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <img src="logomaker.png" style={{height:"100px"}}/>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link" style={{color:"#580533", fontSize:"20px", fontWeight:"bold",paddingLeft:"250px",fontFamily:"cursive", paddingTop:"30px"}}>Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/sellerLogin" className="nav-link" style={{color:"#580533", fontSize:"20px", fontWeight:"bold",paddingLeft:"100px", fontFamily:"cursive",paddingTop:"30px"}}>Sell your items</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/adminLogin" className="nav-link" style={{color:"#580533", fontSize:"20px", fontWeight:"bold",paddingLeft:"100px",fontFamily:"cursive", paddingTop:"30px"}}>Admin Login</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link" style={{color:"#580533", fontSize:"20px", fontWeight:"bold",paddingLeft:"100px",fontFamily:"cursive", paddingTop:"30px"}}>WishList</Link>
                        </li>
                        <li className="navbar-item">
                            <img src="wishlist.png" style={{paddingTop:"15px"}}/>
                        </li>
                        <li className="navbar-item">
                            <Link to="/customer" className="nav-link" style={{color:"#580533", fontSize:"20px", fontWeight:"bold",paddingLeft:"100px",fontFamily:"cursive", paddingTop:"30px"}}>Account</Link>
                        </li>
                        <li className="navbar-item">
                            <img src="account.png" style={{height:"60px",paddingTop:"15px"}}/>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        );
    }
}
export default Navigationbar;