import React from "react";
import './Header.css'
import { useState, useEffect } from "react";
import Hamburger from 'hamburger-react';

const Header = () => {
    const [showhunber, setShowhunber] = useState(false);
    return (
        <>
            <div className="first-navbar">
                <div className="first-navbar-container">
                    <div>
                        <img className="logo" src="assets/isa-icon.png" />
                    </div>
                    <div>
                        <h1 className="header-heading">
                            Indian Society Of Anaesthesiologists
                        </h1>
                        <p className="header-pera">Haldwani City Branch</p>

                    </div>
                    <div className="hamburgar-box"><a href="#" className="hamburgar-icon" onClick={() => setShowhunber(!showhunber)}><Hamburger color="#ffffff" /></a></div>

                </div>


                <div className={showhunber ? "sidebar" : "nav-content1"}>
                    <div >
                        <ul className="sidebar-ul">
                            <li>HOME</li>
                            <li>About ISA HCB</li>
                            <li>
                                Members
                            </li>
                            <li>
                                Resources
                            </li><li>
                                Programes
                            </li><li>
                                Gallery
                            </li><li>
                                Contact
                            </li>
                        </ul>
                    </div>
                </div>






            </div>
            <div className="second-navbar">
                <ul className="header-ul">
                    <li>
                        Home
                    </li>
                    <li>
                        <div class="dropdown">
                            <a class="dropbtn">About ISA HCB</a>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        Members
                    </li>
                    <li>
                        Resources
                    </li><li>
                        Programes
                    </li><li>
                        Gallery
                    </li><li>
                        Contact
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Header