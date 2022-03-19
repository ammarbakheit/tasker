import { useRef, useState, } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "../../Auth/Components/Login";
import { logout } from "../../Auth/Redux/AuthSlice";
import SingleTask from "./Single-Task";


const NavBar = () => {
  const [show, setShow] = useState(false);

  // searching
  const [searchTxt, setSearchTxt] = useState("");
  const [searchResults, setResults] = useState([]);

  const allTasks = useSelector(state => [...state.task.todosList, ...state.task.inProgressList, ...state.task.doneList,]);

  const searchHandler = (txt) => {
    console.log(searchResults);
    setResults([]);
    console.log(searchResults);

    allTasks.map(task => {
      if (task.title.includes(txt)) {
        setResults(prevState => [...prevState, task]);
        // searchResults.push(task);
      }
    })
    console.log(searchResults);

  }
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const handler = (e) => {
    // console.log(e.target);
    setShow(show => show = !show)
  }


  //show single task handler
  const [showTask, setShowTask] = useState(false);
  const showTaskhandler = () => {
    setShowTask(true)
  }

  return (
    <div className=" flex lg:flex-row flex-col-reverse flex-2 justify-between items-start w-full px-10 py-10">
      {
        <div className="lg:fixed">
          <form action="#">
            <div className="flex items-center">
            {/* <box-icon type="regular" color="#1d4ed8" size="sm" name="search"></box-icon> */}
            <input type="text" onChange={e => { setSearchTxt(e.target.value); searchHandler(e.target.value) }} value={searchTxt} 
            placeholder="Search" 
            className="py-1 flex-1  border-indigo-100 border-1 focus:ring-indigo-200   w-full shadow-sm sm:text-sm  rounded-md" />
            </div>
         
          </form>
          {
            searchTxt !== "" &&
            <div className="">
              <div id="dropdown" className="relative mt-1 z-10  text-base list-none bg-white rounded divide-y divide-gray-100 shadow">
                <ul className="py-2" aria-labelledby="dropdownButton">
                  {
                    searchResults.length === 0 ?
                      <li className="flex justify-center items-center  py-3 px-4 font-bold text-sm text-gray-700 ">
                        <div className="flex ">
                          <span className="mx-1 font-medium text-sm text-gray-400" >No item Matched </span>
                        </div>
                      </li>
                      : searchResults.map(result => {

                        return (
                          <div key={result.id}>
                            <SingleTask task={result} onCloseTask={() => setShowTask(false)} showTask={showTask} />
                            <li onClick={() => showTaskhandler()} key={result.id}>
                              <div className="flex items-center cursor-pointer py-3 px-4 font-bold text-sm text-gray-700 hover:bg-gray-100">
                                {
                                  result.status === 1 && (<div className={"w-3 h-3 rounded-full " + "bg-yellow-500"}></div>)
                                }
                                {
                                  result.status === 2 && (<div className={"w-3 h-3 rounded-full " + "bg-blue-500"}></div>)
                                }
                                {
                                  result.status === 3 && (<div className={"w-3 h-3 rounded-full " + "bg-green-500"}></div>)
                                }
                                <span className="mx-1 font-bold text-sm text-gray-700" > {result.title} </span>
                              </div>
                            </li>
                          </div>
                        )
                      })
                  }


                  {/* <li>
                  <div className="flex items-center cursor-pointer py-3 px-4 font-bold text-sm text-gray-700 hover:bg-gray-100">
                    <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                    <span className="mx-1 font-bold text-sm text-gray-700" > first task </span>
                  </div>
                </li>

                <li>
                  <div className="flex items-center cursor-pointer py-3 px-4 font-bold text-sm text-gray-700 hover:bg-gray-100">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="mx-1 font-bold text-sm text-gray-700" > first task </span>
                  </div>
                </li> */}


                </ul>
              </div>
            </div>

          }
        </div>

      }
      <div className="w-full flex-1  flex justify-end">
        {
          user !== undefined ?

            <div className="lg:fixed">

              <div id="dropdownButton" data-dropdown-toggle="dropdown" onClick={(e) => handler(e)} className=" my-2 lg:my-0 flex flex-row-reverse items-center cursor-pointer">
                <div className="bg-indigo-500 rounded-full w-8 h-8 flex justify-center items-center">
                  <span className="text-sm text-white font-bold"> {user.name.slice(0, 1).toUpperCase()}  </span>
                </div>
                <span className="mx-4 font-medium text-sm">{user.name} </span>
              </div>
              {show ?
                <div onClick={(e) => console.log(e.target)} id="dropdown" className="overflow-y-auto z-50 overflow-x-hidden fixed  mt-1 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow">
                  <ul className="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <span className="block cursor-pointer py-2 px-4 font-bold text-sm text-gray-700 hover:bg-gray-100"> {user.name} </span>
                    </li>
                    <li>
                      <span onClick={(e) => dispatch(logout())} className="block cursor-pointer py-2 px-4 text-sm text-red-400 hover:bg-gray-100">Logout</span>
                    </li>
                  </ul>
                </div> : <div></div>}
            </div> : <div></div>
        }


      </div>


    </div>
  );
}


export default NavBar;