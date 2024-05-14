import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";
import ProgressBar from '@ramonak/react-progress-bar';

const EnrolledCourses = () => {
    const {token} = useSelector((state) => state.auth);
    const [enrolled, setEnrolled] = useState();
    const getEnrolledCourses = async () => {
        try {
            const response = await getUserEnrolledCourses(token);
            setEnrolled(response);
        } catch (error) {
            console.log("Enable to fetch Enrolled Courses");
        }
    }
    useEffect(()=>{
        getEnrolledCourses();
    },[])
  return (
    <div className='text-richblack-5'>
        <div>Enrolled Courses</div>
        {
            !enrolled ? (<div>loading...</div>) :
            !enrolled.length ? ( <div>You have not enrolled in any course yet.</div>) :
            (
                <div>
                    <div>
                        <p>Course Name</p>
                        <p>Durations</p>
                        <p>Progress</p>
                    </div>
                    {
                        enrolled.map((course,index) => {
                            return <div>
                                <div>
                                    <img src={course.thumbnail} alt="Thumbnail" />
                                    <div>
                                        <p>{course.name}</p>
                                        <p>{course.description}</p>
                                    </div>
                                </div>

                                <div>
                                    <p>{course?.duration}</p>
                                </div>

                                <div>
                                    <p>Progress: {course?.progress || 0}%</p>
                                    <ProgressBar
                                    completed={course?.progress || 0}
                                    height='8px'
                                    isLabelVisible={false}
                                    />
                                </div>
                            </div>
                        })
                    }
                </div>
            )


        }
    </div>
  )
}

export default EnrolledCourses