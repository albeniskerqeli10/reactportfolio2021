import React from 'react';
import '../styles/header.scss';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <header className="header">
<div className="header__logo">
    <img  src='https://res.cloudinary.com/albenis/image/upload/v1629466276/personalpic2_v00iao.webp' alt="personal pic" loading="lazy" />
 <h4>Albenis</h4>
</div>
        <nav className="header__nav">
        <li className="header__navlink"><Link to='/'>Home</Link></li>
        <li className="header__navlink"> <Link to="/about">About</Link></li>
          
        </nav>
        </header>
    )
}

export default Header
