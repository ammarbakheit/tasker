
import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const Main = () => {
    let [todos, setTodos] = useState([{
        id: 1,
        title: "learn javascript",
        status: 1
    },
    {
        id: 2,
        title: "learn react",
        status: 1

    },]);
    let [inProgress, setInprogress] = useState([{
        id: 3,
        title: "learn redux",
        status: 2

    },]);
    let [done, setDone] = useState([{
        id: 4,
        title: "learn node.js",
        status: 3

    }]);

    const [{ todosIsOver }, todoDrop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addToTodos(item),
        collect: (monitor) => ({
            todosIsOver: !!monitor.isOver()
        })
    }));
    const addToTodos = (task) => {
        console.log(task);
           // determine which list task belongs to
         // remove it from that list
         let filterd = [];
         switch (task.status) {
            
            case 1:
                console.log(todos);
                 filterd = todos.filter(todo => todo.id !== task.id);
                setTodos([...filterd])
                console.log(filterd);

                break;
            case 2:
                 filterd = inProgress.filter(todo => todo.id !== task.id);
                setInprogress([...filterd])
                break;
            case 3:
                 filterd = done.filter(todo => todo.id !== task.id);
                setDone([...filterd])
                break;
        
            default:
                break;
        }
 
        
 
 
         // add it to the new list
        setTodos(todos => [...todos, task])
    }

    const [{ inProgressIsOver }, inProgressDrop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addToInProgress(item),
        collect: (monitor) => ({
            inProgressIsOver: !!monitor.isOver()
        })
    }));
    const addToInProgress = (task) => {
        console.log(task);
        // determine which list task belongs to
         // remove it from that list
        let filterd = [];
        switch (task.status) {
            
            case 1:
                console.log(todos);
                 filterd = todos.filter(todo => todo.id !== task.id);
                setTodos([...filterd])
                console.log(filterd);

                break;
            case 2:
                 filterd = inProgress.filter(todo => todo.id !== task.id);
                setInprogress([...filterd])
                break;
            case 3:
                 filterd = done.filter(todo => todo.id !== task.id);
                setDone([...filterd])
                break;
        
            default:
                break;
        }

       


        // add it to the new list
        setInprogress(inProgress => [...inProgress, task])

    }

    const [{ doneIsOver }, doneDrop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addToDone(item),
        collect: (monitor) => {
            // console.log(monitor);
            return { doneIsOver: !!monitor.isOver() }
        }
    }));
    const addToDone = (task) => {
        console.log(task);
           // determine which list task belongs to
         // remove it from that list
         let filterd = [];
         switch (task.status) {
            
            case 1:
                console.log(todos);
                 filterd = todos.filter(todo => todo.id !== task.id);
                setTodos([...filterd])
                console.log(filterd);

                break;
            case 2:
                 filterd = inProgress.filter(todo => todo.id !== task.id);
                setInprogress([...filterd])
                break;
            case 3:
                 filterd = done.filter(todo => todo.id !== task.id);
                setDone([...filterd])
                break;
        
            default:
                break;
        }
 
        
 
 
         // add it to the new list
        setDone(dones => [...dones, task])

    }


    // console.log({ todos, inProgress, done });
    return (

        <div className="px-10 w-full">
            <span className="font-bold text-lg mx-2">Tasks</span>
            <div className=" flex lg:flex-row flex-col">



                <div ref={todoDrop}>  <Col type={1} title="todo" tasks={todos} /></div>




                <div ref={inProgressDrop}>  <Col type={2} title="in progress" tasks={inProgress} /></div>


                <div ref={doneDrop}>  <Col type={3} title="done" tasks={done} />
                </div>




            </div>


        </div>

    );
}

export default Main;

const UserPadge = ({ typeId }) => {
    switch (typeId) {
        case 1:
            return (<div className="w-7 h-7 bg-yellow-500 rounded-3xl"></div>)
            break;

        case 2:
            return (<div className="w-7 h-7 bg-blue-500 rounded-3xl"></div>)
            break;

        case 3:
            return (<div className="w-7 h-7 bg-green-500 rounded-3xl"></div>)
            break;

        default: (<div className="w-7 h-7 bg-indigo-500 rounded-3xl"></div>)
            break;
    }
}
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
        <div className="w-full mx-2 my-2 flex flex-col justify-start bg-indigo-50 px-5 py-2 rounded-lg">
            <div className="flex flex-row justify-between">
                <span className="font-medium text-sm"> {title} </span>
                <div className="bg-indigo-100 w-6 h-6 flex justify-center items-center rounded-lg">
                    <span className="text-xs font-medium text-indigo-900"> 0</span>
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