import { createSlice } from "@reduxjs/toolkit";
import Status from "../../../Common/Status";


// defining a slice containing  [ initial state, reducers and actions ]
const taskSlice = createSlice({
    name: "task",
    initialState: {
        AllTasks: [],
        todosList: [

        ],
        inProgressList: [

        ],
        doneList: [

        ],
        status: Status.idle,
    },
    reducers: {
        getTasks: () => { },
        setTasksSucess: (state, action) => {
            state.todosList = [];
            state.doneList = [];
            state.inProgressList = [];

            const allTasks = action.payload;
            if (allTasks.length > 0) {
                allTasks.map(task => {
                    if (task.status === 1) {
                        state.todosList = [...state.todosList, task]
                    }
                    else if (task.status === 2) {
                        state.inProgressList = [...state.inProgressList, task]
                    }
                    else if (task.status === 3) {
                        state.doneList = [...state.doneList, task]
                    }
                })
            }

            state.status = Status.success;
        },
        setTasksFailure: (state, action) => {
            console.log(action.payload);
        },


        addTask: (state, action) => {
            state.status = Status.loading;
            console.log(state.status);
        },
        addTaskSuccess: (state, action) => {
            const task = action.payload;
            if (task.status === 1) {
                state.todosList = [...state.todosList, task]
            }
            else if (task.status === 2) {
                state.inProgressList = [...state.inProgressList, task]
            }
            else if (task.status === 3) {
                state.doneList = [...state.doneList, task]
            }
            state.status = Status.success;
            console.log(state.status);


        },
        addTaskFailure: (state, action) => {
            state.status = Status.failure;
            console.log(state.status);


        },


        // edit
        editTask: (state, action) => {
            state.status = Status.loading;
        },
        editTaskSuccess: (state, action) => {
            state.status = Status.success;

        },
        editTaskFailure: (state, action) => {
            state.status = Status.failure;

        },

        // delete
        deleteTask: (state, action) => {

            state.status = Status.loading;
        },
        deleteTaskSuccess: (state, action) => {
            state.status = Status.success;

        },
        deleteTaskFailure: (state, action) => {
            state.status = Status.failure;

        },
        deleteAllTask: (state, action) => { },
        deleteAllTaskSuccess: (state, action) => {
            state.todosList = [];
            state.inProgressList = [];
            state.doneList = [];

            console.log(action.payload);
        },
        deleteAllTaskFailure: (state, action) => {
            console.log(action.payload);
        },
    }
});

// exporting the actions from our slice 
export const { getTasks, setTasksSucess, setTasksFailure,
    addTask, addTaskSuccess, addTaskFailure,
    editTask, editTaskFailure, editTaskSuccess,
    deleteTask, deleteTaskSuccess, deleteTaskFailure, deleteAllTask, deleteAllTaskSuccess, deleteAllTaskFailure } = taskSlice.actions;

export default taskSlice.reducer;