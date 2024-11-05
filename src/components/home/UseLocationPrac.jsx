import React from 'react'
import { useLocation } from 'react-router-dom'

const UseLocationPrac = () => {
    const path = useLocation().pathname

    return (
        <div>
            <h2 className='text-3xl font-bold'>UseLocation Practice</h2>
            {
                path === "/" ? "text" : "text 2"
            }
        </div>
    )
}

export default UseLocationPrac