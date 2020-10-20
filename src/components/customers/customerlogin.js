import React, { Component } from "react";
import {Link} from "react-router-dom";

class Customerlogin extends Component{
    render() {
        return (
            <div className="container col-8" style={{paddingTop:"20px"}}>
                <form>
                    <div className="form-group">
                        <h3 style={{color:"#580533"}}>Customer Login</h3>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-group">
                        <pre>If not registered yet,
                        <Link to="/register" style={{fontWeight:"bold",textDecoration:"none"}}> Register here</Link>
                        </pre>
                    </div>
                </form>
            </div>
        );
    }
}

export default Customerlogin;