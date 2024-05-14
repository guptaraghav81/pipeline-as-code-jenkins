import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../../common/IconBtn';

const renderTotalAmount = () => {

    const {total, cart} = useSelector((state) => state.cart);


    const handleBuyCourse = () => {
        // fetch all course we want to buy or added in cart
        const courses = cart.map((course) => course._id);
        console.log("Bought these course:", courses);
        //TODO: API integrate -> payment gateway tak leke jaegi
    }
  return (
    <div>

        <p>Total:</p>
        <p>Rs {total}</p>

        <IconBtn 
            text="Buy Now"
            onclick={handleBuyCourse}
            customClasses={"w-full justify-center"}
        />
        
    </div>
  )
}

export default renderTotalAmount
