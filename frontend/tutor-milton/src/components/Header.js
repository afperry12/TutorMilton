import PropTypes from 'prop-types';
import './Header.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = ({ loggedIn, username }) => {
    return (
        <header className="App-header">
            <h1 className="top-bar-title">
                <span className="top-bar-title-tutor">Tutor</span>
                <span className="top-bar-title-milton">Milton</span>
            </h1>
            <div id="Navigation_Menu" class="navbar">
                    <li>
                        <NavLink exact to="/" className="Navigation" activeClassName="activeRoute">Home</NavLink>
                    </li>
                    
                    <li> 
                        <NavLink exact to="/tuteeprofile" className="Navigation" activeClassName="activeRoute">My Profile</NavLink>
                    </li>
                        
            
                    <li>
                        <NavLink exact to="/tutorrequests" className="Navigation" activeClassName="activeRoute">Requests</NavLink>
                    </li>
                </div>
            <div className="top-bar-nav">
                {loggedIn ? ([
                    <p className="nav-element">{`Hello, ${username}.`}</p>,
                    <NavLink exact to="/login" className="nav-element nav-button">Logout</NavLink>
                    
                ]
                ) : (
                    <NavLink exact to="/login" className="nav-element nav-button">Login</NavLink>
                )
                }
 
            </div>
        </header>
    )
}

Header.defaultProps = {
    username: "Student",
    loggedIn: false,
}

Header.propTypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
}

export default Header
