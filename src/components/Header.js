import React from 'react';
import '../styles/header.scss';
const Header = () => {
    return (
        <header className="header">
<div className="header__logo">
    <img  src='https://res.cloudinary.com/albenis/image/upload/v1629466276/personalpic2_v00iao.webp' alt="personal pic" loading="lazy" />
 <h4>Albenis</h4>
</div>
        <nav className="header__nav">
        <li className="header__navlink"><a href='/Home'>Home</a></li>
        <li className="header__navlink"> <a href="/About">About</a></li>
          
        </nav>
        </header>
    )
}

export default Header
