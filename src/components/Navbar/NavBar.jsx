import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <navbar className= "navbar">
        <div className="navbar-logtit">
            <Link to="/">
                <img src="img/logo.png" alt="Logo" className="navbar-img" />
            </Link>            
            <h3 className="navbar-title">World of PC!!</h3>   
        </div>

        <div className= "navbar-links">
            <Link to="/" className="navbar-a">Home</Link>
            <Link to="/category/asus" className="navbar-a">ASUS</Link>
            <Link to="/category/lg" className="navbar-a">LG</Link>
            <Link to="/category/samsung" className="navbar-a">Samsung</Link>
            <Link to="/category/viewsonic" className="navbar-a">Viewsonic</Link>       
            <CartWidget/>        
        </div>         
        </navbar>
    )  
}

export default Navbar