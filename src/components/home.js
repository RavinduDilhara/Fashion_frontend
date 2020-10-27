import React, { Component } from "react";

class Home extends Component{

    constructor(props){
        super(props)

        this.womenDisplay = this.womenDisplay.bind(this);
        this.menDisplay = this.menDisplay.bind(this);
        this.kidsDisplay = this.kidsDisplay.bind(this);
        this.j_wDisplay = this.j_wDisplay.bind(this);
        this.b_sDisplay = this.b_sDisplay.bind(this);

        this.state = {
            isWomenDisplay: false,
            isMenDisplay: false,
            isKidsDisplay: false,
            isjwDisplay: false,
            isbsDisplay: false
        }

    }

    womenDisplay(e){
        e.preventDefault();
        
        this.setState({
            isWomenDisplay: true,
            isMenDisplay: false,
            isKidsDisplay: false,
            isjwDisplay: false,
            isbsDisplay: false
        });

    }

    menDisplay(e){
        e.preventDefault();
        
        this.setState({
            isMenDisplay: true,
            isWomenDisplay: false,
            isKidsDisplay: false,
            isjwDisplay: false,
            isbsDisplay: false
        });

    }

    kidsDisplay(e){
        e.preventDefault();
        
        this.setState({
            isMenDisplay: false,
            isWomenDisplay: false,
            isKidsDisplay: true,
            isjwDisplay: false,
            isbsDisplay: false
        });

    }

    j_wDisplay(e){
        e.preventDefault();
        
        this.setState({
            isMenDisplay: false,
            isWomenDisplay: false,
            isKidsDisplay: false,
            isjwDisplay: true,
            isbsDisplay: false
        });

    }

    b_sDisplay(e){
        e.preventDefault();
        
        this.setState({
            isMenDisplay: false,
            isWomenDisplay: false,
            isKidsDisplay: false,
            isjwDisplay: false,
            isbsDisplay: true
        });

    }

    render() {
        const isWomenDisplayed = this.state.isWomenDisplay;
        const isMenDisplayed = this.state.isMenDisplay;
        const isKidsDisplayed = this.state.isKidsDisplay;
        const isjwDisplayed = this.state.isjwDisplay;
        const isbsDisplayed = this.state.isbsDisplay;

        return(
            <div className="row">
            <div style={{paddingTop:"10px"}} className="col-2">
                <ul className="nav flex-column" style={{backgroundColor: "#F7B9CB", height:2000}}>
                    <li className="nav-item">
                        <span style={{color:"#000", marginLeft:"6%", fontWeight:"bold", cursor: "pointer"}} onClick={this.womenDisplay}>Women's Clothing
                            {isWomenDisplayed ? (
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Blouses & Shirts</a>
                                    <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Tops & Tees</a>
                                    <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Jeans</a>
                                    <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Skirts</a>
                                    <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Swimsuit</a>
                                </li>
                            ) : (
                                <li className="nav-item"/>
                            )}    
                        </span>
                    </li>
                    <li className="nav-item">
                        <span style={{color:"#000", marginLeft:"6%", fontWeight:"bold", cursor: "pointer"}} onClick={this.menDisplay}>Men's Clothing
                            {isMenDisplayed ? (
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Shirts</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Tops & Tees</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Shorts</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Bottoms & Denims</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Suits & Blazers</a>
                                    </li>
                                ) : (
                                    <li className="nav-item"/>
                            )}
                        </span>
                    </li>
                    <li className="nav-item">
                        <span style={{color:"#000", marginLeft:"6%", fontWeight:"bold", cursor: "pointer"}} onClick={this.kidsDisplay}>Kid's Clothing
                            {isKidsDisplayed ? (
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Girls' Baby Ware</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Boys' Baby Ware</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Baby Bedding</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Baby Furniture</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Feeding</a>
                                    </li>
                                ) : (
                                    <li className="nav-item"/>
                            )}
                        </span>
                    </li>
                    <li className="nav-item">
                        <span style={{color:"#000", marginLeft:"6%", fontWeight:"bold", cursor: "pointer"}} onClick={this.j_wDisplay}>Jewelery and Watches
                            {isjwDisplayed ? (
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Earrings</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Rings</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Bracelets & Bangles</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Necklaces & Pendants</a>
                                    </li>
                                ) : (
                                    <li className="nav-item"/>
                            )}
                        </span>
                    </li>
                    <li className="nav-item">
                        <span style={{color:"#000", marginLeft:"6%", fontWeight:"bold", cursor: "pointer"}} onClick={this.b_sDisplay}>Bags and Shoes
                            {isbsDisplayed ? (
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Women's Shoes</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Men's Shoes</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Men's Casual Shoes</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Women's Flats</a>
                                        <a className="nav-link" href="#" style={{color:"#000", fontWeight:"normal", marginLeft:"10%"}}>Heels</a>
                                    </li>
                                ) : (
                                    <li className="nav-item"/>
                            )}
                        </span>
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