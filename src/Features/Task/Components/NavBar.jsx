import { useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import Login from "../../Auth/Components/Login";
import { logout } from "../../Auth/Redux/AuthSlice";


const NavBar = () => {
  const dispatch = useDispatch();

  
  const [show, setShow] = useState(false);

  const user = useSelector(state => state.auth.user);
  console.log(user);
  const handler = () => {
    setShow(show => show = !show)
  }

  return (
    <div className="flex lg:flex-row flex-col-reverse flex-2 justify-between items-start w-full px-10 py-10">
      <input type="text" placeholder="Search" className="py-1 flex-1  border-indigo-100 border-1 focus:ring-indigo-200   w-full shadow-sm sm:text-sm  rounded-md" />
      <div className="w-full flex-1  flex justify-end">
        {
          user !== undefined ?

          <div className="lg:fixed">

            <div id="dropdownButton" data-dropdown-toggle="dropdown" onClick={(e) => handler()} className=" my-2 lg:my-0 flex flex-row-reverse items-center cursor-pointer">
              <div className="bg-indigo-500 rounded-full w-8 h-8 flex justify-center items-center">
                <span className="text-sm text-white font-bold"> {user.name.slice(0, 1).toUpperCase()}  </span>
              </div>
              <span className="mx-4 font-medium text-sm">{user.name} </span>
            </div>
            {show ?
              <div id="dropdown" className="relative  mt-1 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow">
                <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <span className="block cursor-pointer py-2 px-4 font-bold text-sm text-gray-700 hover:bg-gray-100"> { user.name } </span>
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