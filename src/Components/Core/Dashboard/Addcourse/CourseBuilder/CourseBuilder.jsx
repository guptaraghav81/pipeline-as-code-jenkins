import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import ModalBtn from '../../../../common/ModalBtn';
import {MdAddCircleOutline} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';

const CourseBuilder = () => {
    const {register, handleSubmit, setValue, formState:{errors} } = useForm();
    const [editSectionName, setEditSectionName] = useState(false);
    const {course} = useSelector((state) => state.course);
    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    const cancelEdit = () => {
        setEditSectionName(false);
        setValue("sectionName", "");
    }
  return (
    <div className='text-white'>
        <p>Course Builder</p>
        <form action="">
        <div>
          <label htmlFor='sectionName'>Section name <sup>*</sup></label>
          <input 
            id='sectionName'
            placeholder='Add section name'
            {...register("sectionName", {required:true})}
            className='w-full'
          />
          {errors.sectionName && (
            <span>Section Name is required</span>
          )}
        </div>

        <div className='mt-10 flex w-full'>
            <ModalBtn
            type="Submit"
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
            customClasses={"text-white"}>
                <MdAddCircleOutline className='text-richblack-800' size={20}/>
            </ModalBtn>
            {editSectionName && (
            <button
            type='button'
            onClick={cancelEdit}
            className='text-sm text-richblack-300 underline ml-10'
            >
              Cancel Edit
            </button>
          )}
        </div>
        </form>

        {/* {course?.courseContent?.length > 0 && (
        <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
      )} */}
    </div>
  )
}

export default CourseBuilder