import React, { useEffect, useState } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from '../../data/navbar-links'
import "../../App.css"
import { useSelector } from 'react-redux'
import { IoCartOutline } from "react-icons/io5";
import ProfileDropDown from '../Core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'
import { FaCircleChevronDown } from "react-icons/fa6";

const subLinks= [
    {
        title:"python",
        link:"/catelog/python",
    },
    {
        title:"java",
        link:"/catelog/java",
    },
    {
        title:"reactJs",
        link:"/catelog/reactJs",
    },
]
const NavBar = () => {

    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const {totalItems} = useSelector((state) => state.cart);

    // const [subLinks, setSubLinks] = useState([]);
    // const fetchSubLinks = async() => {
    //     try {
    //         const result = await apiConnector("GET", categories.CATEGORIES_API);
    //         console.log("PRINTING SUBLINKS RESULT: ", result);
    //         setSubLinks(result.data.data);
    //     } catch (error) {
    //         console.log("Coudn't fetch Category List");
    //     }
    // }
    // useEffect(() => {
    //     fetchSubLinks();
    // },[])

    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }
  return (
    <div className=' w-[100%] flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 mx-auto'>
        <div className=' w-10/12 flex items-center justify-between mx-auto'>
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
                                        item.title === "Catalog" ? (
                                        <div className='relative flex items-center gap-1 group cursor-pointer z-10'>
                                            <p>{item.title}</p>
                                            <FaCircleChevronDown/>
                                            <div className='invisible absolute left-[50%] top-[50%] translate-x-[-80%] translate-y-[50%] flex flex-col rounded-tr-xl rounded-bl-xl bg-richblack-800 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px] z-[30] -mt-10'>
                                                <div className='absolute left-[86%] -top-2 h-6 w-6 rotate-45 rounded bg-richblack-800 z-[-1]'>
                                                </div>
                                                {
                                                    subLinks.length ? (
                                                            subLinks.map((subLink, index) => {
                                                                return (
                                                                    <Link to={`${subLink.link}`} key={index}>
                                                                        <p className='bg-white font-bold hover:bg-yellow-200 py-2 pl-3 rounded-tr-xl rounded-bl-xl text-richblack-800 hover:text-white shadow-sm shadow-caribbeangreen-600 mt-1'>{subLink.title}</p>
                                                                    </Link>
                                                                )
                                                            })
                                                    ) : (<div></div>)
                                                }
                                            </div>
                                        </div>
                                    ) : (
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
            <div className='flex gap-x-4 items-center'>
                {
                    user && user.accountType !== "Instructor" && (
                        <Link to="/dashboard/cart" className='relative'>
                            <IoCartOutline/>
                            {
                                totalItems > 0 && (
                                    <span>{totalItems}</span>
                                )
                            }
                        </Link>
                    )

                }

                {
                    token === null && (
                        <Link to="/login">
                            <button className='bg-yellow-50 text-[14px] text-black px-[9px] py-[6px] rounded-md font-semibold hover:scale-95 transition-all duration-200'>Log in</button>
                        </Link>
                    )
                }

                {
                    token === null && (
                        <Link to="/signup">
                            <button className='bg-richblack-800 text-[14px] px-[9px] py-[6px] text-white rounded-md font-semibold hover:scale-95 transition-all duration-200'>Sign Up</button>
                        </Link>
                    )
                }

                {
                    token !== null && (
                        <ProfileDropDown/>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default NavBar