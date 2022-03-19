import React, { useEffect, useState } from 'react'
import 'boxicons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../Redux/TaskSlice';


export default function SingleTask({ task, showTask, onCloseTask }) {
    const [edit, toggleEdit] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);

    const Badge = ({ statusId }) => {
        switch (statusId) {
            case 1:
                return (
                    <div className="flex items-center my-2 w-full">
                        <div className="bg-yellow-300 w-full rounded-lg flex items-center py-2 pl-2">
                            <input type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                className="todoradioButton" readOnly checked />
                            <label htmlFor="country-option-3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Todo
                            </label>
                        </div>
                    </div>
                )
                break;
            case 2:
                return (
                    <div className="flex items-center my-2 w-full">
                        <div className="bg-blue-300 w-full rounded-lg flex items-center py-2 pl-2">
                            <input type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                className="InProgressradioButton" readOnly checked />
                            <label htmlFor="country-option-3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                In Progress
                            </label>
                        </div>
                    </div>
                )
                break;
            case 3:
                return (
                    <div className="flex items-center my-2 w-full">
                        <div className="bg-green-300 w-full rounded-lg flex items-center py-2 pl-2">
                            <input type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                className="doneradioButton" readOnly checked />
                            <label htmlFor="country-option-3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Done
                            </label>
                        </div>
                    </div>
                )
                break;

            default:
                break;
        }
    }

    // closing the Modal
    const hanndleClose = (e) => {
        if (e.target.className.includes("background")) {
            onCloseTask();
            toggleEdit(false);
        }
    }

    const loadingStatus = useSelector(state => state.task.status);
    useEffect(() => { }, [loadingStatus]);

    const dispatch = useDispatch();

    // Deleting
    const handleDelete = (taskId) => {
        dispatch(deleteTask(taskId));
        onCloseTask();
        toggleEdit(false);
    }
    if (!showTask) {
        return null;
    }

    const submitEdit = (text) => {
        dispatch(editTask({
            ...task,
            title: text
        }));
        onCloseTask();
        toggleEdit(false);
    }
    return (
        (
            <div onClick={(e) => hanndleClose(e)} className="background overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex bg-indigo-900 bg-opacity-30 justify-center items-center md:inset-0 h-modal sm:h-full" id="small-modal">
                <div className="relative px-4 w-full max-w-md h-full md:h-auto">
                    <form action="#" onSubmit={(e) => {
                        e.preventDefault();
                        if (edit && editTitle) {
                            submitEdit(editTitle);
                        }
                    }} >
                        <div className="relative bg-indigo-100 rounded-lg shadow ">
                            <div className="max-w-md py-4 px-10 ">

                                {edit ?
                                    <div>
                                        <label className="block py-3">
                                            <span className="text-indigo-500 font-medium">Edit Task</span>
                                            <textarea name="desc" data-testid="desc"
                                                value={editTitle}

                                                onChange={e => setEditTitle(e.target.value)}
                                                className="form-textarea mt-1 border-indigo-100  border-1  block w-full rounded-xl" rows="3" ></textarea>
                                        </label>
                                    </div>
                                    : <span className='text-lg font-medium'> {task.title} </span>}
                                <div className="py-3  w-full">
                                    <span className="text-indigo-500 font-medium">Belongs To</span>
                                    <Badge statusId={task.status} />



                                </div>

                                {/* <button type="submit" className="bg-indigo-600 rounded-md py-2 px-5 w-full text-white my-5">Submit</button> */}


                            </div>
                            <div className="flex justify-between items-center p-6 space-x-2 rounded-b border-t border-gray-200  ">
                                <div className=" flex grow w-full">
                                    {
                                        edit ?
                                            <button data-modal-toggle="small-modal" type="submit"
                                                className="text-white flex justify-center items-center w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                                <span className="px-2">  Submit </span>

                                            </button>

                                            : <button onClick={(e) => {
                                                e.preventDefault();
                                                edit ? toggleEdit(false) : toggleEdit(true)
                                            }} data-modal-toggle="small-modal"
                                                className="text-white flex justify-center items-center w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                                <box-icon type="solid" color="white" size="sm" name="edit-alt"></box-icon>
                                                <span className="px-2">  Edit </span>

                                            </button>
                                    }

                                </div>
                              
                                <button onClick={(e) => { e.preventDefault(); handleDelete(task.id) }} data-modal-toggle="small-modal"
                                    className="w-full flex items-center text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border 
                                         border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">
                                    <box-icon type="solid" color="#1d4ed8" size="sm" name="trash-alt"></box-icon>
                                    <span className="px-2"> Delete </span>
                                </button>
                                <button onClick={(e) => { e.preventDefault(); onCloseTask(); toggleEdit(false); }} data-modal-toggle="small-modal"
                                    className="w-full flex items-center text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg 
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
    )
}
