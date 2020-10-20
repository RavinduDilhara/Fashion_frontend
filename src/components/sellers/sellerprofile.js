import React, { Component } from "react";

class Sellerprofile extends Component{
    render() {
        return (
            <div style={{paddingTop:"10px"}} className="col-2">
                <h4 style={{color:"#D80876"}}>Seller Dashboard</h4>
                <ul className="nav flex-column" style={{backgroundColor: "#212F3D"}}>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color:"#FC81C2"}}>Add your Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color:"#FC81C2"}}>View your Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color:"#FC81C2"}}>Edit your Profile</a>
                    </li>
                    <li className="nav-item" style={{paddingBottom:"350px"}}>
                        <a className="nav-link" href="#" style={{color:"#FC81C2"}}>Delete your Profile</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sellerprofile;