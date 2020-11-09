import React from 'react';
import { NavLink } from 'react-router-dom'
import '../css/navbar.css';

const Nabbar = () => {
    return(
        <>
        <div className="container-fluid nav_bg nav-container">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
                        <div className="container-fluid">
                            {/* <span className="page-icon"><img src={require( '../Images/pagelogo.png' )} alt="PageLogo" /></span> */}
                            <NavLink className="navbar-brand" to="/">ghargagga</NavLink>
                            <button class="navbar-toggler" 
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" 
                                    aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            </div>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" exact className="nav-link ml-4   " to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" exact className="nav-link ml-4   " to="/listing" >Listings</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" exact className="nav-link ml-4   " to="/help" tabindex="-1" >Help</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" exact className="nav-link ml-4   " to="/login" tabindex="-1" >Login</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    );
};

export default Nabbar;