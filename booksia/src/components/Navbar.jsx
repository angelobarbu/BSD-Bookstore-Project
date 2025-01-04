import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="bg-black sticky top-0">
            <Link to="/"><h1 className="text-white py-3">booksia</h1></Link>
        </nav>
        )
    };

export default Navbar;