import React, { Component } from "react";
import {Link} from "react-router-dom";

class Adminlogin extends Component{

    render() {
        return(
            <div className="container col-8" style={{paddingTop:"20px"}}>
                <form>
                    <div className="form-group">
                        <h3 style={{color:"#580533"}}>Admin Login</h3>
                    </div>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default Adminlogin;