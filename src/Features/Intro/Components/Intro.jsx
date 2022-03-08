import React from 'react'
import ReactLoading from 'react-loading';



export default function Intro() {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center'>

            <div className='flex flex-col justify-center'>
                <div className='flex justify-center mb-6'>
                    <div className='w-10 h-10 bg-indigo-600 rounded-md flex justify-center items-center'>
                        <span className='text-white font-medium'>T</span>
                    </div>
                </div>
                {/* <span className='text-center text-indigo-600 font-medium text-2xl'>Tasker</span> */}
                <div className='flex justify-center'>
                    <span className='text-gray-400 text-center font-normal text-sm'> your favourite tool form task management & tracking </span>
                </div>
            </div>
            <ReactLoading type={"balls"} color={"#6366f1"} height={50} width={50} />



        </div>
    )
}
