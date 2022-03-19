import React from 'react'

export default function Profile({onClose, show, name}) {
    const hanndleClose = (e) => {
        if(e.target.className.includes("background")) {
            onClose();
        }
     }
    if(!show) {
        return null;
    }
  return (
    (
        <div onClick={e => hanndleClose(e)} className="background overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex bg-indigo-900 bg-opacity-30 justify-center items-center md:inset-0 h-modal sm:h-full" id="small-modal">
          <div className="relative px-4 w-full max-w-md h-full md:h-auto">
          
              <div className="relative bg-indigo-100 rounded-lg shadow ">
                <div className=' w-full flex justify-center absolute -top-10'> <div className='w-20 h-20 bg-indigo-600 rounded-full  flex justify-center items-center  leading-[3rem]'>
                  <span className=' font-medium text-white'> {name.slice(0, 2).toUpperCase()}  </span>
                </div>
                </div>
                <div className='px-5 py-12'>
                 <span>Full Name : </span>   <span className='text-gray-500'> {name} </span>
                </div>
                <div className="flex justify-between items-center p-6 space-x-2 rounded-b border-t border-gray-200  ">
                  <div className="grow w-full">
                    <button data-modal-toggle="small-modal" type="submit" className="text-white w-full bg-red-700
                                     hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                      ">Logout</button>
                  </div>
                  {/* <button onClick={onClose} data-modal-toggle="small-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Close</button> */}
                </div>
              </div>
          </div>
        </div>
      )
  )
}
