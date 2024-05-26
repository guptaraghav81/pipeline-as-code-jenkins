import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RxDropdownMenu } from "react-icons/rx";
const NestedView = () => {
  const {course} = useSelector((state) => state.course);
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [addSubSection, setAddSubSection] = useState(null);
  const [viewSubSection, setViewSubSection] = useState(null);
  const [editSubSection, setEditSubSection] = useState(null);

  const [confirmationModal, setConfirmationModal] = useState(null);
  return (
    <div className='text-white mt-10'>
      <div className='text-white'>
        {
          course?.courseContent?.map((section) => {
            <details key={section._id} className='text-white' open>
              <summary>
                <div>
                  <RxDropdownMenu/>
                  <p>{section.sectionName}</p>
                </div>
              </summary>
            </details>
          })
        }
      </div>
    </div>
  )
}

export default NestedView