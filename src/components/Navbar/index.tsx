import React from 'react';
import Style from './Style.module.scss'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className={`${Style.navbar}`}>
            {/*<Link to="/" className="logo"><img></img></Link>*/}
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/services" >Services</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar