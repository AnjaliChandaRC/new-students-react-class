import React from 'react'

const CommonParagraph = ({ text, blueText }) => {
    return (
        <div>
            <p className='font-bold text-2xl'>{text} <span className='text-blue-500'>{blueText}</span></p>
        </div>
    )
}

export default CommonParagraph