import React from 'react'
import Sidebar from './Sidebar'
import SidebarHeader from './SidebarHeader'
import SidebarCenterContent from './SidebarCenterContent'

const Dashboard = () => {
    return (
        <div className='flex min-h-screen'>
            <Sidebar />
            <div className='w-full'>
                <SidebarHeader />
                <div className='px-4 md:px-7 overflow-y-auto max-h-[530px] sm:max-h-[676px] 2xl:max-h-[600px] min-[1600px]:max-h-[930px]'>
                    <SidebarCenterContent />
                </div>
            </div>
        </div>
    )
}

export default Dashboard