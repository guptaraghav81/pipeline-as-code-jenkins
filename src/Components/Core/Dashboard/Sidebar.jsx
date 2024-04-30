import React, { useState } from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import { logout } from '../../../services/operations/authAPI'
import { useDispatch, useSelector } from 'react-redux'
import SidebarLink from './SidebarLink'
import { useNavigate } from 'react-router-dom'
import { VscSignOut } from "react-icons/vsc";
import ConfirmationModal from '../../common/ConfirmationModal'
const Sidebar = () => {
    const {user, loading: profileLoading} = useSelector((state) => state.profile);
    const {loading: authLoading} = useSelector((state) => state.auth);
    const [confirmationModal, setconfirmationModal] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if(profileLoading || authLoading){
        return (
            <div>Loading ...</div>
        )
    }

  return (
    <div className='flex flex-col w-[222px] border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-10'>
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
        <div className='mx-auto my-6 h-[1px] w-10/12 bg-richblack-600'></div>

        <div>
            <SidebarLink link={{name:"Setting", path: "dashboard/settings"}} IconName="VscSettingsGear"/>
            <button onClick={() => setconfirmationModal({
                text1: "Are You Sure ?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setconfirmationModal(null),
            })}
            className='text-sm font-medium text-richblack-300'
            >
                <div className='flex items-center gap-x-2'>
                    <VscSignOut className='text-lg'/>
                    <span>Logout</span>
                </div>
            </button>
        </div>
        {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
    </div>
  )
}

export default Sidebar