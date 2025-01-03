import React from 'react';
import './Nav.css'
function Nav(props) {
    return (
        <div>
            <ul>
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/about">
                    <li>About</li>
                </a>
                <a href="/login">
                    <li>Login</li>
                </a>
                <a href="/Register">
                    <li>Register</li>
                </a>
            </ul>
        </div>
    );
}

export default Nav;