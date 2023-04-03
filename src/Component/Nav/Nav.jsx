import React from 'react';
import { Link , NavLink} from 'react-router-dom';

function Nav(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm py-2">
                <div className="container d-flex justify-content-bettwen">
                    <NavLink className="navbar-brand text-decoration-none" to=""><span className="text-primary">Caring</span>-Clinic </NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>


                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupport">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/appointment">Appointment</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctors">Doctors</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </li>
                        </ul>
                    </div> {/* .navbar-collapse */}
                </div> {/* .container */}
            </nav>
        </header>

    );
}

export default Nav;