import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_TYPE } from '../../../utils/constants';
import { addToCart } from '../../../Slices/cartSlice';
import toast from 'react-hot-toast';

const CourseDetailsCard = ({course, setConfirmationModal, handleBuyCourse}) => {
    const navigate = useNavigate();
    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const {
        thumbNail,
        price: CurrentPrice,

    } = course;

    const handleAddToCart = async ()=>{
        if(user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
            toast.error("You are an Instructor, you cant buy a course");
            return;
        }
        if(token) {
            console.log("dispatching add to cart")
            dispatch(addToCart(course));
            return;
        }
        setConfirmationModal({
            text1:"you are not logged in",
            text2:"Please login to add to cart",
            btn1text:"login",
            btn2Text:"cancel",
            btn1Handler:()=>navigate("/login"),
            btn2Handler: ()=> setConfirmationModal(null),
        })
    }
  return (
    <div>
                    <img 
                src={thumbNail}
                alt='Thumbnail Image'
                className='max-h-[300px] min-h-[180px] w-[400px] rounded-xl'
            />
            <div>
                Rs. {CurrentPrice}
            </div>
            <div className='flex flex-col gap-y-6'>
                <button
                 className='bg-yellow-50 w-fit text-richblack-900'
                    onClick={
                        user && course?.studentsEnrolled.includes(user?._id)
                        ? ()=> navigate("/dashboard/enrolled-courses")
                        : handleBuyCourse
                    }
                >
                    {
                        user && course?.studentsEnrolled.includes(user?._id) ? "Go to Course ": "Buy Now"
                    }
                </button>

                {
                    (!course?.studentsEnrolled.includes(user?._id)) && (
                        <button onClick={handleAddToCart}  
                        className='bg-yellow-50 w-fit text-richblack-900'>
                            Add to Cart
                        </button>
                    )
                }
            </div>
    </div>
  )
}

export default CourseDetailsCard