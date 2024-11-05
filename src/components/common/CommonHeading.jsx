import React from 'react'

const CommonHeading = ({ text, blueText }) => {
    return (
        <div>
            <h2 className='fs-1 fw-bold' >{text}</h2>
            <span className='text-green-500'>{blueText}</span>
        </div>
    )
}

export default CommonHeading