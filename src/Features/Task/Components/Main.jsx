import ReactLoading from 'react-loading';

import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import AddTask from './AddTask';
import { moveTheTask } from '../Redux/TaskSlice';
import SingleTask from './Single-Task';
const Main = () => {

    const todosList = useSelector(state => state.task.todosList);
    const inProgressList = useSelector(state => state.task.inProgressList);
    const doneList = useSelector(state => state.task.doneList);
    const dispatch = useDispatch();
    // console.log(todosList);


    // drop event handler
    const [{ todosIsOver }, todoDrop] = useDrop(() => ({
        accept: "task",
        drop: (item) => dispatch(moveTheTask({ task: item, moveToListid: 1, currentListId: item.status })),
        collect: (monitor) => ({
            todosIsOver: !!monitor.isOver()
        })
    }));

    // drop event handler

    const [{ inProgressIsOver }, inProgressDrop] = useDrop(() => ({
        accept: "task",
        drop: (item) => dispatch(moveTheTask({ task: item, moveToListid: 2, currentListId: item.status })),
        collect: (monitor) => ({
            inProgressIsOver: !!monitor.isOver()
        })
    }));


    // drop event handler
    const [{ doneIsOver }, doneDrop] = useDrop(() => ({
        accept: "task",
        drop: (item) => dispatch(moveTheTask({ task: item, moveToListid: 3, currentListId: item.status })),
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
    }, [])


    return (

        <div className="px-10 w-full ">
            {
                loading ? <div className='w-full min-h-screen  flex justify-center items-center'><ReactLoading type={"balls"} color={"#6366f1"} height={50} width={50} /></div> : <>
                    <span className="font-bold text-lg mx-2">Tasks</span>
                    <div className=" flex lg:flex-row flex-col">



                        <div className="w-full mx-2 my-2 flex flex-col justify-start bg-indigo-50 px-5 py-2 rounded-lg" ref={todoDrop}>
                            <Col type={1} title="todo" tasks={todosList} />
                        </div>


                        <div className="w-full mx-2 my-2 flex flex-col justify-start bg-indigo-50 px-5 py-2 rounded-lg" ref={inProgressDrop}>
                            <Col type={2} title="in progress" tasks={inProgressList} />
                        </div>


                        <div className="w-full mx-2 my-2 flex flex-col justify-start bg-indigo-50 px-5 py-2 rounded-lg" ref={doneDrop}>
                            <Col type={3} title="done" tasks={doneList} />
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
    return (
        <div className="">
            <AddTask onClose={() => setShow(false)} show={show} />
            <div className="flex flex-row justify-between">
                <span className="font-medium text-sm"> {title} </span>
                <div className="bg-indigo-100 w-6 h-6 flex justify-center items-center rounded-lg">
                    <span className="text-xs font-medium text-indigo-900">{tasks.length} </span>
                </div>
            </div>
            <div className="py-2">
                <button onClick={(e) => handler()} className="bg-indigo-300 w-full rounded-lg py-1 flex justify-center items-center text-white font-medium"> + </button>
            </div>
            <div className="py-2">
                {
                    tasks.map(task => {
                        return (
                            <TaskItem key={task.id} task={task} type={type} />
                        )
                    })
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

                <div key={task.id} className={"bg-white rounded-lg pr-2  my-2 shadow-md shadow-slate-300  flex "}>
                    <TaskTik typeId={type} />
                    <div className="px-2 py-2 flex   flex-row w-full justify-start items-center">

                        <span > {task.title}</span>
                    </div>

                </div>
            </div>
        </>
    );
}
const TaskTik = ({ typeId }) => {
    switch (typeId) {
        case 1:
            return (<div className='min-h-max w-1 bg-yellow-600 rounded-tl-lg rounded-bl-lg'> </div>)
            break;

        case 2:
            return (<div className='min-h-max w-1 bg-indigo-600 rounded-tl-lg rounded-bl-lg'> </div>)
            break;

        case 3:
            return (<div className='min-h-max w-1 bg-green-600 rounded-tl-lg rounded-bl-lg'> </div>)
            break;

        default: (<div className='min-h-max w-1 bg-yellow-600 rounded-tl-lg rounded-bl-lg'> </div>)
            break;
    }
}