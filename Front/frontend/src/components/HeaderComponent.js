import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div className="container-fluid d-flex justify-content-center">
                            <Link to="/" className='navbar-brand'>Employee Management</Link>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Register</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}
