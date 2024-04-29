import React from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import { logout } from '../../../services/operations/authAPI'
import { useSelector } from 'react-redux'
import SidebarLink from './SidebarLink'
const Sidebar = () => {
    const {user, loading: profileLoading} = useSelector((state) => state.profile);
    const {loading: authLoading} = useSelector((state) => state.auth);

    if(profileLoading || authLoading){
        return (
            <div>Loading ...</div>
        )
    }

  return (
    <div className='flex flex-col min-w-[222px] border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-10'>
        <div>
            {
                sidebarLinks.map((link,index) => {
                    if(link.type && user?.accountType !== link.type) return null;
                    return (
                        <SidebarLink key={link.id} link={link} IconName={link.icon}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Sidebar