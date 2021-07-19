import React from 'react';
import "./styles/Header.css";


const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="https://www.brainlyemails.com/assets/img/gallery/logo1.png" alt=""/>
            </div>
            <div className="header__button">
                <p>Live! Join Now!</p>
            </div>
        </header>
    );
};

export default Header;
