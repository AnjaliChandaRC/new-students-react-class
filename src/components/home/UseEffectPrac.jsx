import React, { useEffect, useState } from 'react'

const UseEffectPrac = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000);
    })

    return (
        <div>
            <h2 className='text-3xl font-bold'>Use Effect Practice</h2>
            <p>{count}</p>
        </div>
    )
}

export default UseEffectPrac