import React from 'react';
import "./styles/Header.css";

const Header = () => {
    return (
        <main className="main" id="top">
            <nav className="navbar navbar-light sticky-top" data-navbar-darken-on-scroll="900">
                <div className="container pt-2"><a className="navbar-brand" href="/"> <img
                    src="images/logo1.png" alt="..."/></a>
                    <div className="navbar-nav ms-auto">
                        <button className="btn btn-secondary">Coming next week!</button>
                    </div>
                </div>
            </nav>
        </main>
    );
};

export default Header;
