import React, { Component } from "react";

class Home extends Component{
    render() {
        return(
            <div className="row">
            <div style={{paddingTop:"10px"}} className="col-2">
                <ul className="nav flex-column" style={{backgroundColor: "#F7B9CB"}}>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color:"#000"}}>Women's Clothing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color:"#000"}}>Men's Clothing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color:"#000"}}>Kid's Clothing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color:"#000"}}>Jewelery and Watches</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color:"#000" ,paddingBottom:"1000px"}}>Bags and Shoes</a>
                    </li>
                </ul>
            </div>
                <div className="col-8" style={{paddingTop:"10px", paddingLeft:"400px"}}>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2 col-6" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0 col-2" type="submit">Search</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default Home;