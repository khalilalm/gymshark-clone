import logo from "./gl.svg";
import profile from './profile.svg'
import us from './us-logo.png'
import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
        <div className="nav-content">
            <div className="nav-info">
                
                <ul className="nav-info-content">
                    <img src={logo} className="logo"/>
                  <li><span></span>My Account</li>
                    <li>Blog</li>
                    <li>Newsletter</li>
                    <li>Help</li>
                    <li>United States </li>
                </ul>
            </div>
            <nav className="nav">
                <ul > 
                    
                    <li><a>WOMEN'S</a></li>
                    <li><a>MEN'S</a></li>
                    <li></li>
                    <li></li>
                    <li></li>
                   
                </ul>
            </nav>
        </div>
    )
}

export default Nav
