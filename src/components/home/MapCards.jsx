import React from 'react'
import { FacebookIcon } from '../common/Icons'
import { OUR_TEAM_CARDS_DATA } from '../common/Helper'

const MapCards = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold'>Map & Nested Map Cards</h2>
            <div className='flex'>
                {OUR_TEAM_CARDS_DATA.map((obj, index) => (
                    <div key={index} className='card-parent mx-4'>
                        <FacebookIcon />
                        <h2 className={`${index === 0 ? "mt-10" : index === 2 ? "pt-10" : ""}`}>{obj.heading}</h2>
                        <p>{obj.post}</p>
                        <p>{obj.description}</p>
                        {obj.content.map((val, i) => (
                            <p key={i}>
                                {val.list}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MapCards