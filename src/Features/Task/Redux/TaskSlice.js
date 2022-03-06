import { createSlice } from "@reduxjs/toolkit"; 
import Status from "../../../Common/Status";


// defining a slice containing  [ initial state, reducers and actions ]
const taskSlice = createSlice({
    name: "task",
    initialState: {
        AllTasks: [],
        todosList: [{
            id: 1,
            title: "learn javascript",
            status: 1
        },
        {
            id: 2,
            title: "learn react",
            status: 1

        }],
        inProgressList: [{
            id: 3,
            title: "learn redux, redux toolkit, redux-saga, redux-thunk",
            status: 2

        }],
        doneList: [{
            id: 4,
            title: "learn node.js",
            status: 3

        }],
        status: Status.idle,
    },
    reducers: {
        getTasks: () => { },
        setTasksSucess: (state, action) => { },
        setTasksFailure: (state, action) => { },


        addTask: (state, action) => { },
        addTaskSuccess: (state, action) => { },
        addTaskFailure: (state, action) => { },

        moveTheTask: (state, action) => {
            const { task, moveToListid, currentListId } = action.payload;

            let filteredCurrentList = [];
            if (currentListId === 1 && moveToListid !== 1) {

                // removing the task from prev list
                filteredCurrentList = state.todosList.filter(todo => todo.id !== task.id);
                state.todosList = [...filteredCurrentList];



                // adding the task to the new list
              
                if (moveToListid === 2 ) {
                    state.inProgressList = [...state.inProgressList, {
                        ...task,
                        status: 2
                    }]
                }
                else if (moveToListid === 3) {
                    state.doneList = [...state.doneList, {
                        ...task,
                        status: 3
                    }]
                }
            }
            else if (currentListId === 2 && moveToListid !== 2) {
                filteredCurrentList = state.inProgressList.filter(todo => todo.id !== task.id);
                state.inProgressList = [...filteredCurrentList];
                // modifying the task status

                // adding the task to the new list
                if (moveToListid === 1) {
                    state.todosList = [...state.todosList, {
                        ...task,
                        status: 1
                    }]
                }
                else if (moveToListid === 3) {
                    state.doneList = [...state.doneList, {
                        ...task,
                        status: 3
                    }]
                }
            }
            else if (currentListId === 3 && moveToListid !== 3) {
                filteredCurrentList = state.doneList.filter(todo => todo.id !== task.id);
                state.doneList = [...filteredCurrentList];

                // adding the task to the new list
                if (moveToListid === 1) {
                    state.todosList = [...state.todosList, {
                        ...task,
                        status: 1
                    }]
                }
                else if (moveToListid === 2) {
                    state.inProgressList = [...state.inProgressList, {
                        ...task,
                        status: 2
                    }]
                }
            }

            // console.log({task, moveToListid, currentListId});

        },

        deleteTask: (state, action) => { },
        deleteTaskSuccess: (state, action) => { },
        deleteTaskFailure: (state, action) => { },
    }
});

// exporting the actions from our slice 
export const { getTasks, setTasksSucess, setTasksFailure,
    addTask, addTaskSuccess, addTaskFailure,
    moveTheTask,
    deleteTask, deleteTaskSuccess, deleteTaskFailure } = taskSlice.actions;

export default taskSlice.reducer;