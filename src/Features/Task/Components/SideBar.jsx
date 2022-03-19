import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const SideBar = () => {
  const todosList = useSelector(state => state.task.todosList);
  const inProgressList = useSelector(state => state.task.inProgressList);
  const doneList = useSelector(state => state.task.doneList);
  const user = useSelector(state => state.auth.user);

  const combinedList = [...todosList, ...inProgressList, ...doneList]
  return (
    <aside className="w-64  overflow-y-auto min-h-screen  py-4 px-3 bg-slate-50 rounded border-r-2 border-gray-200">
    
        <Link to="/">
          <div className="flex flex-col justify-start px-2 my-10">
            <span className="text-indigo-600 font-bold text-lg "> Tasker </span>
            <span className="text-sm text-gray-400"> simple tasks and Notes traker </span>
          </div>
        </Link>

        <ul className="space-y-2">
          <li>
            <Link to="/">
              <div className="sidebar-item">
                <box-icon type="regular" color="#1d4ed8" size="sm" name="home-alt-2"></box-icon>
                <span> Overview</span>
                {
                  user ? (
                    <div className="flex justify-center items-center bg-indigo-600 text-white font-medium  rounded-lg w-6 h-6">
                      <span>  {combinedList.length} </span>
                    </div>
                  ) : <div></div>
                }
                
              </div>
            </Link>
          </li>
          <li>
            <Link to="/habits-tracker">
              <div className="sidebar-item">
                <box-icon type="regular" color="#1d4ed8" size="sm" name="trending-up"></box-icon>
                <span>Habits Tracker</span>
                <div></div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/habits-tracker">
              <div className="sidebar-item">
                <box-icon type="regular" color="#1d4ed8" size="sm" name="brightness"></box-icon>
                <span>Settings</span>
                <div></div>
              </div>
            </Link>
          </li>
        </ul>
     

    </aside>
  );
}
export default SideBar;