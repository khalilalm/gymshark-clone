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
                  <li><img src={profile} className="profile-img"/> My Account</li>
                    <li>Blog</li>
                    <li>Newsletter</li>
                    <li>Help</li>
                    <li><img src={us}className="us-logo"/>United States </li>
                </ul>
            </div>
            <nav>
                <ul className="nav" > 
                    <img src={logo} className="logo"/>
                    <li><a>WOMENS</a></li>
                    <li><a>MENS</a></li>
                    /<li></li>
                    <li></li>
                    <li></li>
                   
                </ul>
            </nav>
        </div>
    )
}

export default Nav
