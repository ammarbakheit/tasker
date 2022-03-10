import React, { useState } from 'react'

export default function Login({ showLoginForm, onClose }) {

  const [name, setName] = useState("");
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(e.target.value);

  }

  const hanndleClose = (e) => {
    if(e.target.className.includes("background")) {
        onClose();
    }
 }
  if (!showLoginForm) {
    return null;
  }
  return (
    (
      <div onClick={e => hanndleClose(e)} className="background overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex bg-indigo-900 bg-opacity-30 justify-center items-center md:inset-0 h-modal sm:h-full" id="small-modal">
        <div className="relative px-4 w-full max-w-md h-full md:h-auto">
          <form action="#" className=' p-10 ' >
            <div className="relative bg-indigo-100 rounded-lg shadow static">
              <div className=' w-full flex justify-center absolute -top-10'> <div className='w-20 h-20 bg-indigo-600 rounded-full  flex justify-center items-center  leading-[3rem]'>
                <span className=' font-medium text-white'> {name.slice(0, 2).toUpperCase()}  </span>
              </div>
              </div>
              <div className="max-w-md pb-4 pt-14 px-6">

                <div className='w-full flex justify-center'> <span className='text-sm font-normal text-gray-400'> login / create an account  </span> </div>

                <div className="my-2">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User Name</label>
                  <input type="text" onChange={(e) => handleName(e)} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                </div>
                <div className="my-2">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                  <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                </div>


                {/* <button type="submit" className="bg-indigo-600 rounded-md py-2 px-5 w-full text-white my-5">Submit</button> */}



              </div>
              <div className="flex justify-between items-center p-6 space-x-2 rounded-b border-t border-gray-200  ">
                <div className="grow w-full">
                  <button data-modal-toggle="small-modal" type="button" className="text-white w-full bg-indigo-700
                                   hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                    dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Login</button>

                </div>
                {/* <button onClick={onClose} data-modal-toggle="small-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Close</button> */}
              </div>
            </div>
          </form>
        </div>
      </div>

    )
  )
}
