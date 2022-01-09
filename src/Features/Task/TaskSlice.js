import { createSlice } from "@reduxjs/toolkit";



// defining a slice containing  [ initial state, reducers and actions ]
 const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: []
    },
    reducers: {
        getTasks: () => {},
        setTasks: (state, action) => {
            // console.log(action.payload);
            state.tasks = action.payload;
        },
        addTask: (state, action) => {},

        checkTask: (state, action) => {
            // state.tasks.map(task => {
            //     if(task.id === action.payload) {
            //         task.status === "0" ? task.status = "1" : task.status = "0";
            //     }
            // })
        }, 
        deleteTask: (state, action) => {}
    }
}); 

// exporting the actions from our slice 
export const {getTasks,  setTasks , addTask, checkTask, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;