import { Link } from "react-router-dom";


const SideBar = () => {
    return (
      <aside className="w-64 ">
        <div className=" overflow-y-auto h-screen  py-4 px-3 bg-slate-50 rounded border-r-2 border-gray-200">
        <Link to="/">
              <div className="flex flex-col justify-start px-2 my-10">
                <span className="text-indigo-600 font-bold text-lg "> Tasker </span>
                <span className="text-sm text-gray-400"> simple tasks and Notes traker </span>
              </div>
            </Link>
  
          <ul className="space-y-2">
            <li> <a href="#" className="sidebar-item">  <span> Overview</span> <div className="flex justify-center items-center bg-indigo-600 text-white font-medium  rounded-lg w-6 h-6"><span> 0 </span> </div> </a> </li>
            <li> <a href="#" className="sidebar-item"> <span>  This Month</span> </a> </li>
            <li> <a href="#" className="sidebar-item"><span>Settings </span>  </a> </li>
          </ul>
        </div>
  
      </aside>
    );
  }

  export default SideBar;