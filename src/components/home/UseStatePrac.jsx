import React, { useState } from 'react'

const UseStatePrac = () => {
    const [value, setValue] = useState(0)

    return (
        <div>
            <h2 className='text-3xl font-bold'>Use State Practice</h2>
            <p>{value}</p>
            <button onClick={() => setValue(value - 1)}>Click</button>
        </div>
    )
}

export default UseStatePrac