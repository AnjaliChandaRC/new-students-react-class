import React, { useState } from 'react'
import CountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'

const Counter = () => {
    const [viewCount, setViewCount] = useState(false)
    const COUNTER_DATA = [
        {
            value: "%",
            text: "Reduction in Pain"
        },
        {
            value: "+",
            text: "Reduction in Pain"
        },
        {
            value: "-",
            text: "Reduction in Pain"
        },
    ]

    function onVisibility(value) {
        if (value) {
            setViewCount(true)
        }
    }
    return (
        <div>{COUNTER_DATA.map((obj, i) => (
            <p key={i}>
                <ReactVisibilitySensor onChange={onVisibility}>
                    <CountUp start={0} end={i === 0 ? viewCount ? 100 : 0 : i === 1 ? viewCount ? 20 : 0 : i === 2 ? viewCount ? 10 : 0 : ""}>
                    </CountUp>
                </ReactVisibilitySensor>
                <span>{obj.value}</span>
                <span>{obj.text}</span>
            </p >
        ))}</div>
    )
}

export default Counter