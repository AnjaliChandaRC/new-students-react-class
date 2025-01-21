import React, { useState } from 'react'
import logo from "../../assets/images/png/logo.png"
import { SIDEBAR_DATA } from '../common/Helper'

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const handleLinkClick = (e) => {
        e.preventDefault();
        setSidebar(!sidebar);
    };

    return (
            <div>
                {
                    sidebar ? "" : <div onClick={() => setSidebar(!sidebar)} className='bg-black opacity-60 w-full h-full fixed top-0 right-0 transition-all ease-in-out duration-500 md:hidden'></div>
                }

                <div className='ps-4 pt-3 absolute'>
                    <button onClick={() => setSidebar(!sidebar)} className='md:hidden text-xl font-bold'>Toggle</button>
                </div>
                <div className={`${sidebar ? "left-0 top-0" : ""} bg-black w-[240px] min-h-screen py-11 px-7 flex justify-between flex-col absolute md:relative transition-transform ease-in-out duration-500`}>
                    <div>
                        <button onClick={() => setSidebar(!sidebar)} className='md:hidden text-white absolute top-[15px] text-xl font-bold'>Cross</button>
                        <a href="/">
                            <img src={logo} className='w-[184px] h-[63px] mt-10' alt="logo" />
                        </a>
                        <div className='pt-8'>
                            {
                                SIDEBAR_DATA.map((obj, index) => (
                                    <a href={obj.url} key={index} className='flex gap-4 mt-8' onClick={(handleLinkClick)}>
                                        <span>{obj.icon}</span>
                                        <h2 className='text-white'>{obj.text}</h2>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className='grid'>
                        <a href="#help" onClick={() => setSidebar(!sidebar)} className='text-sm text-white opacity-60'>Help</a>
                        <a href="#contact-us" onClick={() => setSidebar(!sidebar)} className='text-sm text-white opacity-60 mt-4'>Contact Us</a>
                        <a href="#log-out" onClick={() => setSidebar(!sidebar)} className='text-sm text-white opacity-60 mt-4'>Log Out</a>
                    </div>
                </div>
            </div>
    )
}

export default Sidebar