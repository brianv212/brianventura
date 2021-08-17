import React from 'react';
import {
    Link
} from "react-router-dom";
import './Navbar.css'

import Me from '../../images/icon.jpg'

function NavBar () {
    return (
        <div className="navbar-container">
            <Link to="/brianventura" className="navbar-link"><img src={Me} className="navbar-me" alt="It's me!"/></Link>
            <div className="navbar-title">
                Welcome!
            </div>
            <div className="navbar-directory">
                <Link to="/brianventura/projects" className="navbar-link">Projects</Link>
                {/* <Link to="/contact" className="navbar-link">Contact Me</Link>                 */}
            </div>
            
        </div>
    )
}

export default NavBar