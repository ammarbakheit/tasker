import AddTask from './Components/AddTask';
import Task from './Components/Task';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from './Features/Task/TaskSlice';
import { FiPlusCircle, FiCheck, FiTrendingUp } from "react-icons/fi";
import { IconContext } from "react-icons";


function App() {
  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(getTasks());

    }
  }, [dispatch]);


  // console.log(tasks.length);

  return (
    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>

      <div className="w-full  bg-slate-50  ">
        <div className="px-10 flex flex-col justify-start min-h-screen  mx-auto">
          <Link to="/">
            <div className="flex justify-center my-10">
              <span className="text-indigo-600 font-bold text-lg "> Tasker </span>
            </div>
          </Link>





          <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-3  sm:grid sm:grid-cols-1   ' >

            <div className=' sm:max-w-full'>

              <div className="my-5 mx-5  py-4 px-10 bg-white shadow-md rounded-lg  ">

              
                <Link to="/add-task">
                  <button className="w-full bg-indigo-600 rounded-md py-2 px-5 text-white my-5 flex items-center justify-center"> <FiPlusCircle className='mr-2' />  <p> Add</p>  </button>
                </Link>

              </div>
            </ div>

            <div className="my-5">
              <div className='mx-5   px-5 flex justify-between rounded-lg py-3  items-center bg-indigo-600 '> <div className='flex items-center'>  <FiTrendingUp className='mr-2' /> <h3 className="text-white font-medium "> {"On Progress"}  </h3></div>  <span className="mx-5 font-medium text-white" > {tasks.filter(task => task.status !== "1").length} </span> </div>

              {

                tasks.filter(task => task.status !== "1").map(task => {
                  return <Task key={task.id} task={task} />
                })
              }
            </div>

            <div className="my-5">
              <div className='mx-5   px-5 flex justify-between rounded-lg py-3  items-center bg-green-600'> <div className='flex items-center '>  <FiCheck className='mr-2' />  <h3 className="text-white font-medium "> {"Done"} </h3></div><span className="mx-5 font-medium text-white" > {tasks.filter(task => task.status === "1").length} </span> </div>

              {

                tasks.filter(task => task.status === "1").map(task => {
                  return <Task key={task.id} task={task} />
                })
              }
            </div>




          </div>

        </div>
      </div>
    </IconContext.Provider>

  );
}

export default App;
