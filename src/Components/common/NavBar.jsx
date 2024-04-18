import React from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from '../../data/navbar-links'
import "../../App.css"
const NavBar = () => {
    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }
  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className='w-11/12 flex justify-between items-center'>
            <Link to={"/"}>
                <img src={logo} alt="" srcset="" width={160} />
            </Link>
            <nav>
                <ul className='flex gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map((item,index) => {
                            return (
                                <li key={index} >
                                    {
                                        item.title === "Catalog" ? (<div></div>) : (
                                            <Link to={item?.path}>
                                                <p className={` ${matchRoute(item?.path) ? "highlightedText" : ""} font-semibold`}>{item.title}</p>
                                            </Link>
                                        )
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>

            {/* login/signup/dashboard */}
            <div></div>
        </div>
    </div>
  )
}

export default NavBar