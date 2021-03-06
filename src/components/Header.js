import React from 'react';
import '../styles/header.scss';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <header className="header">
<div className="header__logo">
    <div className="header__pic"></div>
 <h4>Albenis</h4>
</div>
        <nav className="header__nav">
        <ul>
        <li className="header__navlink"><Link to='/'>Home</Link></li>
        <li className="header__navlink"> <Link to="/about">About</Link></li>
        </ul>
          
        </nav>
        </header>
    )
}

export default Header
