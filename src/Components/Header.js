import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import './Header.css';


const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header>
            <h1>E-commerce Clone</h1>
            
            <nav>
                <Link to ="/">Products</Link>

                <Link to="/cart">Cart</Link>
                {user ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                        
                        
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;