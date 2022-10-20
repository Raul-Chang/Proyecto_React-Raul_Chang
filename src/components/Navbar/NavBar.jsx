import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

function Navbar(){
    return(
        <navbar className= "navbar">
        <div className="navbar-logtit">
            <img src="img/logo.png" alt="Logo" className="navbar-img" />
            <h3 className="navbar-title">World of PC!!</h3>   
        </div>

        <div className= "navbar-links">
        <a href="" className= "navbar-a">Home</a>
        <a href="" className= "navbar-a">Desktop PC</a>
        <a href="" className= "navbar-a">Notebooks</a>   
        <a href="" className= "navbar-a">Monitors</a> 
        <a href="" className= "navbar-a">Accesories</a>
        <CartWidget/>
        </div>         
        </navbar>
    )  
}

export default Navbar