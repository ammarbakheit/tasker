import { createSlice } from "@reduxjs/toolkit";
import Status from "../Common/Status";


// defining a slice containing  [ initial state, reducers and actions ]
const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
        status: Status.idle,
    },
    reducers: {
        getTasks: () => { },
        setTasksSucess: (state, action) => { },
        setTasksFailure: (state, action) => { },


        addTask: (state, action) => { },
        addTaskSuccess: (state, action) => { },
        addTaskFailure: (state, action) => { },

        checkTask: (state, action) => { },
        checkTaskSuccess: (state, action) => { },
        checkTaskFailure: (state, action) => { },

        deleteTask: (state, action) => { },
        deleteTaskSuccess: (state, action) => { },
        deleteTaskFailure: (state, action) => { },
    }
});

// exporting the actions from our slice 
export const { getTasks, setTasksSucess, setTasksFailure,
    addTask, addTaskSuccess, addTaskFailure,
    checkTask, checkTaskSuccess, checkTaskFailure,
    deleteTask, deleteTaskSuccess, deleteTaskFailure } = taskSlice.actions;

export default taskSlice.reducer;