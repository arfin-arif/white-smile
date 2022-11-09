import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);



    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch((error) => { console.log(error) })
    }
    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1 ">
                <NavLink to='/' className="hidden  lg:flex ">
                    <img src={logo} className='h-20' alt="" />
                </NavLink>
                <NavLink className="btn btn-ghost normal-case text-xl">White Smile</NavLink>
            </div>
            <div className="flex-none">
                <div className='hidden mr-3 lg:flex'>
                    <NavLink to='/' className='pr-2'>Home</NavLink>
                    <NavLink to='/services' className='pr-2'>Services</NavLink>
                    <NavLink to='/about' className='pr-2'>About</NavLink>
                    <NavLink to='/blog' className='pr-2'>Blogs</NavLink>
                </div>

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/' className='pr-2'>Home</NavLink>
                        <NavLink to='/services' className='pr-2'>Services</NavLink>
                        <NavLink to='/about' className='pr-2'>About</NavLink>
                        <NavLink to='/blog' className='pr-2'>Blogs</NavLink>
                    </ul>
                </div>


                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user?.photoURL ?
                                    <>
                                        <img src={user?.photoURL} alt='' />
                                    </>
                                    :
                                    <>
                                        <FaUser className='ml-1 text-3xl'></FaUser>
                                    </>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user?.email ?
                                <>
                                    <li ><NavLink to='/'>My Review</NavLink></li>
                                    <li ><NavLink to='/services/add' >Add Service</NavLink></li>
                                    <li onClick={handleLogOut}><NavLink>Logout</NavLink></li>

                                </>
                                :
                                <>
                                    <li><NavLink to='/login'>LogIn</NavLink></li>

                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;