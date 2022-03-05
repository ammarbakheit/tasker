import { useSelector } from "react-redux";
// import { FiPlusCircle, FiCheck, FiTrendingUp } from "react-icons/fi";
import { IconContext } from "react-icons";
import SideBar from "./Features/Task/Components/SideBar";
import NavBar from "./Features/Task/Components/NavBar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App({children}) {
  // const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);

  // useEffect(() => {
  //   // if (tasks.length === 0) {
  //   //   // dispatch(getTasks());

  //   // }
  // }, [dispatch]);


  // console.log(tasks.length);

  return (
    <DndProvider backend={HTML5Backend}>
    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>

      <div className="w-full  h-full bg-white">
        <div className=" flex w-full  h-full  mx-auto">
          <SideBar />
          <div className="w-full">
            <NavBar/>
          {
              children
          }
          </div>

        </div>
      </div>
    </IconContext.Provider>
  </DndProvider>


  );
}

export default App;
