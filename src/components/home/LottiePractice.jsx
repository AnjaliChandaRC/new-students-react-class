import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../../assets/lottie/Tokenomics.json'

const LottiePractice = () => {
    return (
        <div className='bg-black'>
            <h2 className='text-3xl font-bold text-white pt-5'>Lottie Practice</h2>
            <Lottie
                className='w-1/2'
                loop
                animationData={lottieJson}
                play
            /></div>
    )
}

export default LottiePractice