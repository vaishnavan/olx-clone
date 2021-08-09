import React from 'react'
import './navbar.css';

function Navbar() {
    return (
        <div className="nav-design">
            {/* olx navbar creation */}
            <div className="container nav-main">
                <div className="nav-logo">
                    <h3>O<sub>L</sub>X</h3>
                </div>

                <div className="nav-select">
                    <div>
                        <span><i className="fa fa-search"></i></span>
                    </div>
                    <div>
                        <span><input type="text" placeholder="Search City, area or locality" /></span>
                    </div>
                    <div>
                        <span className="nav-select-angle"><i className="fa fa-angle-down"></i></span>
                    </div>
                </div>

                <div className="nav-search">
                    <div className="nav-search-input">
                        <input type="text" placeholder="Find Cars, Mobile Phones and more..." />
                    </div>
                    <div className="nav-search-btn">
                        <button><i className="fa fa-search"></i></button>
                    </div>
                </div>
                <div className="nav-langage">
                    <div>
                        <span className="nav-lang-select">English</span>
                    </div>
                    <div>
                        <span className="nav-lang-icon"><i className="fa fa-angle-down"></i></span>
                    </div>
                    <div class="dropdown-content">
                        <a href="#">English</a>
                        <a href="#">Hindi</a>
                        <a href="#">Malayalam</a>
                    </div>
                </div>
                <div className="nav-login">
                    <a href="#">Login</a>
                </div>

                <div className="nav-sell">
                    <div className="nav-sell-add-icon">
                        <span>+</span>
                    </div>
                    <div className="nav-sell-link">
                        <a href="#">SELL</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
