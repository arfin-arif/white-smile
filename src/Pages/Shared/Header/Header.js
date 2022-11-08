import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1 ">
                <Link to='/' className="hidden  lg:flex ">
                    <img src={logo} className='h-20' alt="" />
                </Link>
                <Link className="btn btn-ghost normal-case text-xl">White Smile</Link>
            </div>
            <div className="flex-none">
                <div className='hidden mr-3 lg:flex'>
                    <Link to='/' className='pr-2'>Home</Link>
                    <Link to='/services' className='pr-2'>Services</Link>
                    <Link to='/about' className='pr-2'>About</Link>
                    <Link to='/blog' className='pr-2'>Blogs</Link>
                </div>

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/' className='pr-2'>Home</Link>
                        <Link to='/services' className='pr-2'>Services</Link>
                        <Link to='/about' className='pr-2'>About</Link>
                        <Link to='/blog' className='pr-2'>Blogs</Link>
                    </ul>
                </div>


                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li><Link>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;