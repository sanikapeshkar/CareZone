import React from 'react'
import Sidebar from '../Sidebar'
import usericon from './../media/ctpfp.png'

const UserProfile = () => {
    return (
        <div className='w-screen flex'>
            <Sidebar />
            <div className='w-3/4 ml-auto'>
                <div className='p-4'>
                    <div className='flex justify-between'>
                        <img className='w-20 h-20' src={usericon}></img>
                        <div>
                            <h1>Name of User</h1>
                            <h1>username</h1>
                            <h1>Akurdi, Pune</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
