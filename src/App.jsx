import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiPlusCircle, FiCheck, FiTrendingUp } from "react-icons/fi";
import { IconContext } from "react-icons";
import Task from "./Features/Task/Components/Task";
import SideBar from "./Features/Task/Components/SideBar";
import NavBar from "./Features/Task/Components/NavBar";
import Main from "./Features/Task/Components/Main";


function App() {
  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    if (tasks.length === 0) {
      // dispatch(getTasks());

    }
  }, [dispatch]);


  // console.log(tasks.length);

  return (
    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>

      <div className="w-full  h-full bg-white">
        <div className=" flex w-full  h-full  mx-auto">

          <SideBar />
          <div className="w-full">
            <NavBar />
            <Main />
          </div>

        </div>
      </div>
    </IconContext.Provider>

  );
}

export default App;
