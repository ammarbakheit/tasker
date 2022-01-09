import { React } from "react";
import { useDispatch } from "react-redux";
import { checkTask, deleteTask } from '../Features/Task/TaskSlice';
import { FiXCircle, FiTrash } from "react-icons/fi";
import { IconContext } from "react-icons";

const Task = ({ task }) => {
  const dispatch = useDispatch();



  const statusConverter = id => {
    switch (id) {
      case "0":
        return "On Progress";
        break;
      case "1":
        return "Done";
      default:
        return "On Progress"
        break;
    }
  }

  return (
    <div>
      <div className=" sm:max-w-full mx-5 my-5  py-4 px-10 bg-white shadow-md rounded-lg     task">

        <div className="  flex items-center justify-between ">

          <div className="flex items-center justify-between">
            <button onClick={() => dispatch(deleteTask(task.id))}>
              <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
                <div>
                  <FiTrash className="mr-2 indigo-600" />
                </div>
              </IconContext.Provider>

            </button>


            {
              task.status === "0" ? <p className=" mx-3 break-all   text-indigo-600 text-lg font-semibold" id="title"> {task.title} </p>
                : <h2 className=" break-all mx-3 text-green-600 text-lg font-semibold"> {task.title} </h2>
            }


          </div>


       


          {
            task.status === "0" ? <input onChange={() => dispatch(checkTask(task.id))} type="checkbox" className="form-checkbox rounded" />
              : <input checked onChange={() => dispatch(checkTask(task.id))} type="checkbox" className="form-checkbox rounded  border-green-600 checked:bg-green-600" />
          }


        </div>

        <div className="flex items-center justify-between py-3">
          <p className="break-all mt-2 text-md text-gray-400"> {task.desc} </p>
        </div>
      </div>

    </div>
  )
}
export default Task;
