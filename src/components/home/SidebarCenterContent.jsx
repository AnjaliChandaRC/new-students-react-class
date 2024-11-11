import React from 'react'

const SidebarCenterContent = () => {
    return (
        <>
            <div className='sm:flex justify-between pt-4 sm:py-7 gap-7'>
                <div className='bg-gray-500 h-[230px] xl:h-[500px] w-full flex justify-center items-center'>
                    <h2 className='text-2xl lg:text-5xl font-medium text-center'>Content One</h2>
                </div>
                <div className='bg-red-200 h-[230px] xl:h-[500px] w-full flex justify-center items-center mt-4 sm:mt-0'>
                    <h2 className='text-2xl lg:text-5xl font-medium text-center'>Content Two</h2>
                </div>
            </div>
            <div className='sm:flex justify-between gap-7 mt-4 sm:mt-0'>
                <div className='bg-red-200 h-[230px] xl:h-[500px] w-full flex justify-center items-center'>
                    <h2 className='text-2xl lg:text-5xl font-medium text-center'>Content Three</h2>
                </div>
                <div className='bg-gray-500 h-[230px] xl:h-[500px] w-full flex justify-center items-center mt-4 sm:mt-0'>
                    <h2 className='text-2xl lg:text-5xl font-medium text-center'>Content Four</h2>
                </div>
            </div>
        </>
    )
}

export default SidebarCenterContent