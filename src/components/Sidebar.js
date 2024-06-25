import React from 'react'
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='w-1/4 h-screen bg-[#8883f0] flex flex-col items-center fixed'>
            <h1 className='my-8 text-5xl font-semibold text-white'>Grammie</h1>
            {SidebarData.map((val, key) => {
                return (
                    <div className='w-full h-16 flex hover:bg-[#6c65eb] duration-100 flex items-center' id={window.location.pathname == val.link ? "sidebaractive" : ""} key={key} onClick={() => { window.location.pathname = val.link }}>
                        <div className='mx-4 text-xl font-[400] text-[#ebebeb]'>{val.title}</div>
                    </div>
                )
            })}
            <div className='m-4 mt-auto flex items-center'>
                <div className='bg-white rounded-full h-16 w-16 mr-4'>
                    <img></img>
                </div>
                <div className='flex flex-col'>
                    <h3 className='my-2'>username</h3>
                    <Link>
                        <h3 className='p-2 px-4 bg-[#ebebeb] text-[#8883f0] rounded-2'>Logout</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
