import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: true,
    },
    reducers: {
        getCurrentUser: () => {
            
        },
        login: () => {},
        logout: () => {}
    }
});


export default authSlice.reducer;