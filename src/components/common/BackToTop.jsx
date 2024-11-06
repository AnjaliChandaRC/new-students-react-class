import React, { useEffect, useState } from 'react'

const BackToTop = () => {

    const [scrollTop, setScrollTop] = useState(false)

    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const showHandler = () => {
        setScrollTop(window.scrollY > 100)
    }

    useEffect(() => {
        window.addEventListener("scroll", showHandler)
    }, [])


    return (
        <div>
            {
                scrollTop && (
                    <button onClick={scrollHandler} className='fixed right-[10px] bottom-[10px] text-red-900'>Top</button>
                )
            }
        </div>
    )
}

export default BackToTop