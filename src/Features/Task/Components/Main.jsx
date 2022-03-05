import ReactLoading from 'react-loading';

import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { moveTheTask } from "../../../Redux/TaskSlice";
import { useDispatch, useSelector } from "react-redux";
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
    useEffect(() =>{
      setLoading (true);
  
     let timer = setTimeout(() => {
        setLoading(false);
  
      
      }, 1000);
  
      return () => {
        clearTimeout(timer)
      }
    }, [])


    return (

        <div className="px-10 w-full min-h-screen">
            {
                 loading ?   <div className='w-full min-h-screen flex justify-center items-center'><ReactLoading type={"balls"} color={"#6366f1"} height={50} width={50} /></div>  : <> 
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

const TaskTik = ({ typeId }) => {
    switch (typeId) {
        case 1:
            return (<div className="w-1  h-1 bg-yellow-500  rounded-lg mr-1"></div>)
            break;

        case 2:
            return (<div className="w-1  h-1 bg-blue-500  rounded-lg mr-1"></div>)
            break;

        case 3:
            return (<div className="w-1  h-1 bg-green-500  rounded-lg mr-1"></div>)
            break;

        default: (<div className="w-1  h-1 bg-green-500  rounded-lg mr-1"></div>)
            break;
    }
}
const Col = ({ tasks, title, type }) => {

    return (
        <div className="">
            <div className="flex flex-row justify-between">
                <span className="font-medium text-sm"> {title} </span>
                <div className="bg-indigo-100 w-6 h-6 flex justify-center items-center rounded-lg">
                    <span className="text-xs font-medium text-indigo-900">{tasks.length} </span>
                </div>
            </div>

            <div className="py-2">
                <button className="bg-indigo-300 w-full rounded-lg py-1 flex justify-center items-center text-white font-medium"> + </button>
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

    return (
        <div
            ref={drag}
            className={"cursor-pointer"}
        >
            <div key={task.id} className={"bg-white rounded-lg px-2 py-2 my-2 shadow-md shadow-slate-300 "}>
                <div className="mb-2 flex   flex-row w-full justify-start items-center">
                    <div>
                        <TaskTik typeId={type} />
                    </div>
                    <span > {task.title}</span>
                </div>
                <div>
                    {/* <UserPadge typeId={type} /> */}
                </div>
            </div>
        </div>

    );
}