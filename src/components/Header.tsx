import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='p-4 bg-dark w-100'>
            <Link to='/' className='noTextDecoration'><h1 className='text-center text-white '>Employee Information System</h1></Link> 
        </div>
    )
}

export default Header;