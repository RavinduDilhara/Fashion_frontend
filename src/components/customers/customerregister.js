import React, { Component } from "react";

class Sellerregister extends Component{
    render() {
        return (
            <div className="container col-8" style={{paddingTop:"20px"}}>
                <form>
                    <div className="form-group">
                        <h3 style={{color:"#580533"}}>Customer Register</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Customer Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Contact Number</label>
                        <input type="number" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn" style={{background:"#0AEA57"}}>Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Sellerregister;