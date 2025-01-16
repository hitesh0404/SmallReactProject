import React from 'react';
import './Nav.css'
import { Link, NavLink } from 'react-router';
export default function Nav(props) {
    return (
        <div>
            <li>
                <NavLink to="/" className={( {isActive} )=> isActive? 'active':''} >
                   Home
                </NavLink>
            </li>
            <li>
            <NavLink to="/about" className={({ isActive }) =>  isActive ? "active" : ""} >
                   About
                </NavLink>
                </li>
                <li>
                <NavLink to="/login" className={({ isActive }) =>  isActive ? "active" : ""} >
                    Login
                </NavLink>
                </li>
                <li>
                <NavLink to="/register" className={({ isActive }) =>  isActive ? "active" : ""} >
                    Register
                </NavLink>
                </li>

        </div>
    );
}

// export default Nav;