import React from 'react'

export default function SingleTask({ task, showTask, onCloseTask }) {

    const Badge = ({statusId}) => {
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
                            className="InProgressradioButton" readOnly checked/>
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
    console.log(task);
    if (!showTask) {
        return null;
    }
    return (
        (
            <div onClick={onCloseTask} className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex bg-indigo-900 bg-opacity-30 justify-center items-center md:inset-0 h-modal sm:h-full" id="small-modal">
                <div className="relative px-4 w-full max-w-md h-full md:h-auto">
                    <form action="#" >
                        <div className="relative bg-indigo-100 rounded-lg shadow ">
                            <div className="max-w-md py-4 px-10 ">

                           <span className='text-lg font-medium'> {task.title} </span>
                                <div className="py-3  w-full">
                                    <span className="text-indigo-500 font-medium">Belongs To</span>
                                    <Badge statusId={task.status} />

                                 

                                </div>

                                {/* <button type="submit" className="bg-indigo-600 rounded-md py-2 px-5 w-full text-white my-5">Submit</button> */}



                            </div>
                            <div className="flex justify-between items-center p-6 space-x-2 rounded-b border-t border-gray-200  ">
                                <div className="grow w-full">
                                    <button data-modal-toggle="small-modal" type="button" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                                </div>
                                <button onClick={onCloseTask} data-modal-toggle="small-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Close</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    )
}
