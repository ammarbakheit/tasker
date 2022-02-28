import { React } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { addTask } from "../Features/Task/TaskSlice";

const AddTask = () => {
    let [counter, setCount] = useState(1);
    const [title, setTitle] = useState('');
    const [subtasks, setSubTasks] = useState([]);

    const [desc, setDesc] = useState('');
    const [status, setStatus] = useState('0');

    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const formHandler = e => {

        e.preventDefault();
        // if(title !== "" && desc !== "") {
        const newTask = {
            title,
            desc,
            status
        };
        console.log(subtasks);
        dispatch(addTask({ ...newTask }))
        navigate("/")
        // }


    }

    



    return (
        <div className=" p-5 w-full h-screen bg-slate-50 ">
            <div className=" flex flex-col justify-center min-h-screen max-w-md mx-auto">
                <Link to="/">
                    <div className="flex justify-center my-10">
                        <span className="text-indigo-600 font-bold text-lg "> Tasker </span>
                    </div>
                </Link>
                <div className="max-w-md py-4 px-10 bg-white shadow-lg rounded-lg ">
                    <form action="#" onSubmit={formHandler}>
                        <label className="block py-3">
                            <span className="text-indigo-500 text-md ">Title </span>
                            <input type="text" name="title" data-testid="title" onChange={e => {   setTitle(e.target.value)}} className="py-2 border-indigo-300 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md" />
                        </label>

                    


                      

                        <label className="block py-3">
                            <span className="text-indigo-500">Description</span>
                            <textarea name="desc" onChange={e => { setDesc(e.target.value) }} data-testid="desc" className="form-textarea mt-1 border-indigo-300  border-2  block w-full rounded-md" rows="3" placeholder="Enter The task"></textarea>
                        </label>

                        <label className="block py-3">
                            <span className="text-gray-700">Status</span>
                            <select name="status" onChange={e => { setStatus(e.target.value) }} data-testid="status" className="form-select block w-full mt-1 rounded-md border-2 border-indigo-300">
                                <option value="0">on Progress</option>
                                <option value="1">Done</option>
                            </select>
                        </label>


                        <button type="submit" className="bg-indigo-600 rounded-md py-2 px-5 w-full text-white my-5">Submit</button>

                    </form>

                </div>
            </div>

        </div>
    )
}
export default AddTask;