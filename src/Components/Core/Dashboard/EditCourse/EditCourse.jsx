import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import RenderSteps from '../Addcourse/RenderSteps';
import { getFullDetailsOfCourse } from '../../../../services/operations/courseDetailsAPI';
import { setCourse, setEditCourse } from '../../../../Slices/courseSlice';

const EditCourse = () => {
    const dispatch = useDispatch();
    const {courseId} = useParams();
    const {course} = useSelector((state) => state.course);
    const [loading, setLoading] = useState(false)
    const { token } = useSelector((state) => state.auth)

    useEffect(()=> {
        const populateCourseDetails = async () => {
            console.log(courseId);
            setLoading(true);
            const result = await getFullDetailsOfCourse(courseId, token);
            if(result?.courseDetails){
                dispatch(setEditCourse(true));
                dispatch(setCourse(result?.courseDetails));
            }
            setLoading(false);
        }
        populateCourseDetails();
    },[])
  return (
    <div className='text-richblack-5'>
        <h1>Edit Course</h1>
        <div>
            {course ? (<RenderSteps/>) : (<p>No Course Found</p>)}
        </div>
    </div>
  )
}

export default EditCourse