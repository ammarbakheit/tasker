import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';


export default function HabitsTracker() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    let timer = setTimeout(() => {
      setLoading(false);


    }, 1000);

    return () => {
      clearTimeout(timer)
    }
  }, [])

  console.log(loading);
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      {
        loading ?
          <div className='w-full flex justify-center'>
            <ReactLoading type={"balls"} color={"#6366f1"} height={50} width={50} />
          </div> :
          <div>HabitsTracker</div>
      }

    </div>
  )
}
