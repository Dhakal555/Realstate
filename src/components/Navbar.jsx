import React from 'react';
import { NavLink } from 'react-router-dom'
import '../css/navbar.css';

const Nabbar = () => {
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            {/* <span className="page-icon"><img src={require( '../Images/pagelogo.png' )} alt="PageLogo" /></span> */}
                            <NavLink className="navbar-brand" to="/">GharJagga</NavLink>
                            <button className="navbar-toggler" 
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" 
                                    aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/listing" >Listings</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/help" tabindex="-1" >Help</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/login" tabindex="-1" >Login</NavLink>
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