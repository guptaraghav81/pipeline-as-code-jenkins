import React, { useState } from 'react'

const RequirementField = ({name, label, register, errors, setValue, getValues}) => {
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);
  const handleAddRequirement = ()=> {
    if(requirement){
      setRequirementList([...requirementList,requirement]);
      setRequirement("");
    }
  }
  const handleRemoveRequirement = (clearIndex)=> {
    setRequirementList(requirementList.filter((item, index)=> index !== clearIndex));
  }
  return (
    <div className='text-richblack-600'>
      <label htmlFor={name}>{label}<sup>*</sup></label>
        <div>
            <input
                type='text'
                id={name}
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                className='w-full'
            />
            <button
            type='button'
            onClick={handleAddRequirement}
            className='font-semibold text-yellow-50'>
                Add
            </button>
        </div>
        {
            requirementList.length > 0 && (
                <ul>
                    {
                        requirementList.map((requirement, index) => (
                            <li key={index} className='flex items-center text-richblack-5'>
                                <span>{requirement}</span>
                                <button
                                type='button'
                                onClick={() => handleRemoveRequirement(index)}
                                className='text-xs text-pure-greys-300'>
                                    clear
                                </button>
                            </li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default RequirementField