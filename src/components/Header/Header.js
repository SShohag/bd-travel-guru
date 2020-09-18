import React, { useContext } from 'react';
import './Header.css'
import logo from '../../Logo.png'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <div className="header">
            <nav className="nav">
            <img style={{height:'40px'}} src={logo} alt=""/>
                <ul>
                    <li>
                        <Link to="/news">News</Link> 
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <button onClick={()=>setLoggedInUser({})} > Sign Out </button>
                    </li>
                </ul>  
            </nav>    
        </div>
    );
};

export default Header;