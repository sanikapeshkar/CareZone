import React from 'react';
import Sidebar from './Sidebar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import CTData from './userdashboard/CTData';
import EventData from './userdashboard/EventData';

const Dashboard = () => {
    return (
        <div className='w-screen flex'>
            <Sidebar />
            <div className='w-4/5 p-4 ml-auto'>
                <h1 className='text-4xl font-semibold text-[#8883f0] mt-3'>Dashboard</h1>
                <div className='w-full p-4 grid grid-cols-2 gap-4'>
                    <div className='flex flex-col p-4 rounded-4'>
                        <h1 className='bg-[#8883f0] text-white font-semibold text-center text-2xl mb-2 p-2 rounded-2'>Hired Caretakers</h1>
                        <div className='p-4 py-2 bg-slate-200 rounded-4'>
                            {CTData.slice(0, 3).map((val, key) => (
                                <div key={key} className='flex items-center p-2 bg-white rounded-2 my-2'>
                                    <img className='h-12 w-12 rounded-full mr-2' src={val.cticon} alt={val.ctname} />
                                    <h1 className='text-xl'>{val.ctname}</h1>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className='flex flex-col p-4 rounded-4 bg-slate-200'>
                        <h1 className='bg-[#8883f0] text-white font-semibold text-center text-2xl mb-2 p-2 rounded-2'>Calendar</h1>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar />
                        </LocalizationProvider>
                    </div>
                    <div className='flex flex-col p-4 rounded-4 relative -top-32'>
                        <h1 className='bg-[#8883f0] text-white font-semibold text-center text-2xl mb-2 p-2 rounded-2'>Upcoming Event</h1>
                        <div className='bg-slate-200 p-4 py-2 rounded-2'>
                            <h1 className='text-center p-2 my-2 bg-white text-xl rounded-2'>{EventData[0].eventname}</h1>
                            <h1 className='text-center p-2 my-2 bg-white text-xl rounded-2'>{EventData[0].eventdate}</h1>
                            <h1 className='text-center p-2 my-2 bg-white text-xl rounded-2'>{EventData[0].eventlocation}</h1>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
