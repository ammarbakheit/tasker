import ReactLoading from 'react-loading';

import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import AddTask from './AddTask';
import { deleteAllTask, editTask, } from '../Redux/TaskSlice';
import SingleTask from './Single-Task';
const Main = () => {


    const todosList = useSelector(state => state.task.todosList);
    const inProgressList = useSelector(state => state.task.inProgressList);
    const doneList = useSelector(state => state.task.doneList);
    const reload = useSelector(state => state.task.reload);


    const dispatch = useDispatch();
    // console.log(todosList);


    // drop event handler
    const [{ todosIsOver }, todoDrop] = useDrop(() => ({
        accept: "task",
        drop: (item) => dispatch(editTask({ ...item, status: 1 })),
        // drop: (item) => dispatch(moveTheTask({ task: item, moveToListid: 1, currentListId: item.status })),
        collect: (monitor) => ({
            todosIsOver: !!monitor.isOver()
        })
    }));

    // drop event handler

    const [{ inProgressIsOver }, inProgressDrop] = useDrop(() => ({
        accept: "task",
        // drop: (item) => dispatch(moveTheTask({ task: item, moveToListid: 2, currentListId: item.status })),
        drop: (item) => dispatch(editTask({ ...item, status: 2 })),

        collect: (monitor) => ({
            inProgressIsOver: !!monitor.isOver()
        })
    }));


    // drop event handler
    const [{ doneIsOver }, doneDrop] = useDrop(() => ({
        accept: "task",
        // drop: (item) => dispatch(moveTheTask({ task: item, moveToListid: 3, currentListId: item.status })),
        drop: (item) => dispatch(editTask({ ...item, status: 3 })),

        collect: (monitor) => {
            // console.log(monitor);
            return { doneIsOver: !!monitor.isOver() }
        }
    }));


    // page loading
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);

        let timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(timer)
        }
    },
        [reload]
        // [todosList, inProgressList, doneList]
    )

    const clearAll = () => {
        dispatch(deleteAllTask())
    }


    return (

        <div className="px-10  mt-10">
            {
                loading ? <div className='w-full min-h-screen  flex justify-center items-center'><ReactLoading type={"balls"} color={"#6366f1"} height={50} width={50} /></div> : <>
                    <div className='flex justify-between'>
                        <span className="font-bold text-lg mx-2">Tasks</span>
                        <button onClick={clearAll} className='bg-red-400 px-2 py-1 mr-2 rounded-md text-sm font-normal text-white '> clear All </button>
                    </div>
                    <div className=" flex lg:flex-row flex-col">



                        <div className="w-full mx-2 my-2 flex flex-col justify-start bg-yellow-100 px-5 py-2 rounded-lg" ref={todoDrop}>
                            <Col key={1} type={1} title="todo" tasks={todosList} />
                        </div>


                        <div className="w-full mx-2 my-2 flex flex-col justify-start bg-blue-100 px-5 py-2 rounded-lg" ref={inProgressDrop}>
                            <Col key={2} type={2} title="in progress" tasks={inProgressList} />
                        </div>


                        <div className="w-full mx-2 my-2 flex flex-col justify-start bg-green-100 px-5 py-2 rounded-lg" ref={doneDrop}>
                            <Col key={3} type={3} title="done" tasks={doneList} />
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Main;


const Col = ({ tasks, title, type }) => {

    const [show, setShow] = useState(false);
    const handler = (e) => {
        setShow(true)
        // console.log(show);
    }

    // button bg color 
    let bgcolor = "";
    if (type === 1) { bgcolor = "bg-yellow-300" }
    else if (type === 2) { bgcolor = "bg-blue-300" }
    else if (type === 3) { bgcolor = "bg-green-300" }

    return (
        <div key={type} className="">
            <AddTask onClose={() => setShow(false)} show={show} typeId={type} />
            <div className="flex flex-row justify-between">
                <span className="font-medium text-sm"> {title} </span>
                <div className={bgcolor + " w-6 h-6 flex justify-center items-center rounded-lg"}>
                    <span className="text-xs font-medium text-indigo-900">{tasks.length} </span>
                </div>
            </div>
            <div className="py-2">
                <button onClick={(e) => handler()} className={bgcolor + " w-full rounded-lg py-1 flex justify-center items-center text-white font-medium"}> + </button>
            </div>
            <div className="py-2">
                {
                    tasks.length > 0 ? tasks.map(task => {
                        return (
                            <TaskItem key={task.id} task={task} type={type} />
                        )
                    }) :
                        <div className='flex justify-center h-max items-center'>

                            <span className='text-sm text-gray-500'> No Tasks Here </span>
                        </div>
                }
            </div>
        </div>
    );
}


const TaskItem = ({ task, type }) => {
    const [{ isDraging }, drag] = useDrag(() => ({
        type: "task",
        item: task,
        collect: (monitor) => {
            // console.log(monitor);
            return { isDraging: !!monitor.isDragging() }
        }
    }));
    //show single task handler
    const [showTask, setShowTask] = useState(false);
    const handler = () => {
        setShowTask(true)
    }

    // bg color 
    let bgcolor = "";
    if (task.status === 1) { bgcolor = "bg-yellow-300" }
    else if (task.status === 2) { bgcolor = "bg-blue-300" }
    else if (task.status === 3) { bgcolor = "bg-green-300" }
    return (
        <>
            <div>
                <SingleTask task={task} onCloseTask={() => setShowTask(false)} showTask={showTask} />
            </div>
            <div
                ref={drag}
                className={"cursor-pointer"}
                onClick={(e) => handler()}
            >

                <div key={task.id} className={bgcolor + " rounded-lg pr-2  my-2 shadow-md shadow-slate-300  flex "}>
                    <TaskTik typeId={type} />
                    {/* <TaskBottomTik typeId={type} /> */}
                    <div className='flex flex-col py-2'>
                        <div className="px-2  flex  flex-row w-full justify-start items-center">
                            <span className='font-normal  text-gray-700'> {task.title}</span>
                        </div>
                        <span className='text-xs font-normal text-gray-500 px-2 pt-3'> {task.date} </span>
                    </div>

                </div>
            </div>
        </>
    );
}
const TaskTik = ({ typeId }) => {
    switch (typeId) {
        case 1:
            return (<>
                <div className='min-h-max w-2 bg-yellow-600 rounded-tl-lg rounded-bl-lg'> </div>

            </>
            )
            break;

        case 2:
            return (
                <>
                    <div className='min-h-max w-2 bg-indigo-600 rounded-tl-lg rounded-bl-lg'> </div>
                </>
            )
            break;

        case 3:
            return (
                <>
                    <div className='min-h-max w-2 bg-green-600 rounded-tl-lg rounded-bl-lg'> </div>
                </>
            )
            break;

        default: (
            <>
                <div className='min-h-max w-2 bg-yellow-600 rounded-tl-lg rounded-bl-lg'> </div>
            </>
        )
            break;
    }
}