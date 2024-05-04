import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const EnrolledCourses = () => {
    const {token} = useSelector((state) => state.auth);
    const [enrolled, setEnrolled] = useState();
    const getEnrolledCourses = async () => {
        try {
            // const response = await 
        } catch (error) {
            console.log("Enable to fetch Enrolled Courses");
        }
    }
    useEffect(()=>{

    },[])
  return (
    <div>
        <div>Enrolled Courses</div>
    </div>
  )
}

export default EnrolledCourses