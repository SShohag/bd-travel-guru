import React, { useContext } from 'react';
import './Header.css'
import logo from '../../Logo.png'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav className="navBar">
                <Link to="/news">News</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/home">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/home" ><button onClick={()=>setLoggedInUser({})} > Sign Out </button></Link>
            </nav>
        </div>
    );
};

export default Header;