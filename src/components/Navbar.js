import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../pages/search/Search';
import './Navbar.css'
import Searchbar from './Searchbar';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <Link to='/' className='brand'>
                    <h1>RECIPE FOODS</h1>
                </Link>
                <Searchbar/>
                <Link to='/create'>
                    Create Recipe
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;