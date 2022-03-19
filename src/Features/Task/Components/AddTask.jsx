import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTask, getTasks } from "../Redux/TaskSlice";
import Status from "../../../Common/Status";
import Loading from "react-loading";

const AddTask = ({ show, onClose, typeId }) => {
        const [title, setTitle] = useState("");
        const [status, setStatus] = useState(typeId);

        const loadingStatus = useSelector(state => state.task.status);

        const dispatch = useDispatch();
    const formHandler = e => {
      
        e.preventDefault();
        if(title !== ""&& status) {
            dispatch(addTask({title, status, date: new Date().toLocaleString()}))
            setTitle("")
            setStatus(typeId)
            onClose();
        }
    }


    const hanndleClose = (e) => {
        if(e.target.className.includes("background")) {
            setTitle("")
            setStatus(typeId)
            onClose();
        }
     }

    if (!show) {
        return null;
    }
    return (

        <div  onClick={(e) => hanndleClose(e)} className="background overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex bg-indigo-900 bg-opacity-30 justify-center items-center md:inset-0 h-modal sm:h-full" id="small-modal">
            <div className="relative px-4 w-full max-w-md h-full md:h-auto">
                <form action="#" onSubmit={formHandler}>
                    <div className="relative bg-indigo-100 rounded-lg shadow ">
                        <div className="max-w-md py-4 px-10 ">






                            <label className="block py-3">
                                <span className="text-indigo-500 font-medium">Task Title</span>
                                <textarea value={title} onChange={(e) => {setTitle(e.target.value)} }  name="desc" data-testid="desc" 
                                className="form-textarea mt-1 border-indigo-100  border-1  block w-full rounded-xl" rows="3" placeholder="Describe Your Task"></textarea>
                            </label>
                            <div className="py-3  w-full">
                                <span className="text-indigo-500 font-medium">Belongs To</span>
                             
                          
                                <div className="flex items-center my-2 w-full">
                                    <div className="bg-yellow-300 w-full rounded-lg flex items-center py-2 pl-2">
                                        <input  onChange={ (e) => { setStatus(1) } } type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                            className="todoradioButton" checked={status === 1 && "checked"} />
                                        <label htmlFor="country-option-3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Todo
                                        </label>
                                    </div>
                                </div>
                                <div className="flex items-center my-2 w-full">
                                    <div className="bg-blue-300 w-full rounded-lg flex items-center py-2 pl-2">
                                        <input onChange={ (e) => { setStatus(2) } } type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                            className="InProgressradioButton" checked={status === 2 && "checked"} />
                                        <label htmlFor="country-option-3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            In Progress
                                        </label>
                                    </div>
                                </div>
                                <div className="flex items-center my-2 w-full">
                                    <div className="bg-green-300 w-full rounded-lg flex items-center py-2 pl-2">
                                        <input onChange={ (e) => { setStatus(3) } } type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                            className="doneradioButton" checked={status === 3 && "checked"} />
                                        <label htmlFor="country-option-3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Done
                                        </label>
                                    </div>
                                </div>

                            </div>

                            {/* <button type="submit" className="bg-indigo-600 rounded-md py-2 px-5 w-full text-white my-5">Submit</button> */}

                        </div>
                        <div className="flex justify-between items-center p-6 space-x-2 rounded-b border-t border-gray-200  ">
                            <div className="grow w-full">
                                 {
                                     loadingStatus === Status.loading ? <Loading /> : 
                            <button data-modal-toggle="small-modal" type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                                 }

                            </div>
                            <button onClick={(e) => { e.preventDefault(); onClose();  }} data-modal-toggle="small-modal"
                                    className="w-full justify-center flex items-center text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg 
                                         border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">
                                    <box-icon type="solid" color="#1d4ed8" size="sm" name="x-circle"></box-icon>
                                    <span className="px-2"> Close </span>
                                </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default AddTask;