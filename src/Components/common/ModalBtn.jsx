import React from 'react'

const ModalBtn = ({
    text,
    onclick,
    children,
    disable,
    outline=false,
    customClasses,
    type,
}) => {
  return (
    <button
    disabled={disable}
    onClick={onclick}
    type={type}>
        {
            children ? (
                <>
                <span>{text}</span>
                {children}
                </>
            ) : (text)
        }
    </button>
  )
}

export default ModalBtn