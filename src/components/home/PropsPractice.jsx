import React from 'react'
import CommonHeading from "../common/CommonHeading"
import CommonParagraph from "../common/CommonParagraph"

const PropsPractice = () => {

    return (
        <>
            <h2 className='text-3xl font-bold'>Props Practice</h2>
            <CommonHeading text="Text value" blueText="Blue text" />
            <CommonParagraph text="Paas the text" blueText="Blue text" />
        </>
    )
}

export default PropsPractice