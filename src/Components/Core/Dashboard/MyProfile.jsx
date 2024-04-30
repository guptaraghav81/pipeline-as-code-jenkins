import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ModalBtn from '../../common/ModalBtn';
import { BiEdit } from "react-icons/bi";

const MyProfile = () => {
    const {user, loading} = useSelector((state) => state.profile);
    const navigate = useNavigate();

  return (
    <div className='text-richblack-5 flex flex-col gap-8 '>
        <h1 className=' text-4xl font-semibold'>My Profile</h1>
        <div className='flex justify-between bg-richblack-800 py-6 px-4 rounded-tl-xl rounded-br-xl'>
            <div className=' flex items-center gap-6 text-richblack-5 '>
            <img src={user?.image} alt={`profile-${user?.firstName}`} className=' aspect-square w-[70px] rounded-full object-cover' />
            <div className=''>
                <p className='font-semibold text-lg'>{user?.firstName + " " + user?.lastName}</p>
                <p>{user?.email}</p>
            </div>
            </div>
            {/* its work is just a simple button we can do anything don't go on name */}
            <ModalBtn onclick={() => {
                return navigate("/dashboard/settings")
            }}>
                <div className='flex gap-1 items-center text-lg'>
                <p>Edit</p>
                <BiEdit/>
                </div>
                </ModalBtn>
        </div>


    </div>
  )
}

export default MyProfile