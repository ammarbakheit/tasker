import { useSelector } from "react-redux";
// import { FiPlusCircle, FiCheck, FiTrendingUp } from "react-icons/fi";
import { IconContext } from "react-icons";
import SideBar from "./Features/Task/Components/SideBar";
import NavBar from "./Features/Task/Components/NavBar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Login from "./Features/Auth/Components/Login";

function App({children}) {
  // const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);
  const user = useSelector(state => state.auth.user);

  console.log(user);
  // useEffect(() => {
  //   // if (tasks.length === 0) {
  //   //   // dispatch(getTasks());

  //   // }
  // }, [dispatch]);


  // console.log(tasks.length);

  return (
    <DndProvider backend={HTML5Backend}>
    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>

      <div className="w-full  bg-white">
        <div className=" flex w-full   mx-auto">
          <SideBar  />
          <div className="w-full">
            <NavBar/>
          { 
              user ? 
              children : <div className="w-full flex justify-center"> <Login onClose={() => console.log("close")} showLoginForm={true} /> </div>
          }
          </div>

        </div>
      </div>
    </IconContext.Provider>
  </DndProvider>


  );
}

export default App;
