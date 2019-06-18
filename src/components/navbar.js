import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ()=>{
return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Mia's Sandwiches</Link>
                <ul className="subLinks">
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>
        </nav> 
    )
}

export default Navbar;