import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import {fetchCourseCategories} from "../../../../../services/operations/courseDetailsAPI"
import RequirementField from './requirementField';
const CourseInformationForm = () => {
      const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: {errors},
      } = useForm();
      const dispatch = useDispatch();
      const {course, editCourse} = useSelector((state) => state.course);
      const [loading, setloading] = useState(false);
      const [courseCategories, setCourseCategories] = useState([]);

      useEffect(()=>{
        const getCategories = async() => {
          setloading(true);
          const response = await fetchCourseCategories();
          if(response.length >0){
            setCourseCategories(response);
          }
          if(editCourse){
            setValue("courseTitle", course.courseName);
            setValue("courseShortDesc", course.courseDescription);
            setValue("coursePrice", course.price);
            setValue("courseTags", course.tag);
            setValue("courseBenefits", course.whatYouWillLearn);
            setValue("courseCategory", course.category);
            setValue("courseRequirements", course.instructions);
            setValue("courseImage", course.thumbnail);
          }
          setloading(false);
        }
        getCategories();
      },[])

  return (
    <form action="">
      <div>
            <label  htmlFor='courseTitle'>Course Title<sup>*</sup></label>
            <input
                id='courseTitle'
                placeholder='Enter Course Title'
                {...register("courseTitle", {required:true})}
                className='w-full'
            />
            {
                errors.courseTitle && (
                    <span>Course Title is Required**</span>
                )
            }
        </div>
        <div>
            <label  htmlFor='courseShortDesc'>Course Short Description<sup>*</sup></label>
            <textarea
                id='courseShortDesc'
                placeholder='Enter Description'
                {...register("courseShortDesc", {required:true})}
                className='min-h-[140px] w-full'
                />
            {
                errors.courseShortDesc && (<span>
                    Course Description is required**
                </span>)
            }
        </div>
        <div className='relative'>
            <label htmlFor='coursePrice'>Course Price<sup>*</sup></label>
            <input
                id='coursePrice'
                placeholder='Enter Course Price'
                {...register("coursePrice", {
                    required:true,
                    valueAsNumber:true
                })}
                className='w-full'
            />
            <HiOutlineCurrencyRupee  className='absolute top-1/2 text-richblack-400'/>
            {
                errors.coursePrice && (
                    <span>Course Price is Required**</span>
                )
            }
        </div>
        <div>
            <label htmlFor='courseCategory'>Course Category<sup>*</sup></label>
            <select
            id='courseCategory'
            defaultValue=""
            className='text-richblack-800'
            {...register("courseCategory", {required:true})}
            >
                <option value="" disabled>Choose a Category</option>

                {
                    !loading && courseCategories.map((category, index) => (
                        <option key={index} value={category?._id}>
                            {category?.name}
                        </option>
                    ))
                }

            </select>
            {errors.courseCategory && (
                <span>
                    Course Category is Required
                </span>
            )}
        </div>
        <div>
            <label>Benefits of the course<sup>*</sup></label>
            <textarea
            id='coursebenefits'
            placeholder='Enter Benefits of the course'
            {...register("courseBenefits", {required:true})}
            className='min-h-[130px] w-full'
            />
            {errors.courseBenefits && (
                <span>
                    Benefits of the course are required**
                </span>
            )}
        </div>
        <RequirementField
            name="courseRequirements"
            label="Requirements/Instructions"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
        />
    </form>
  )
}

export default CourseInformationForm