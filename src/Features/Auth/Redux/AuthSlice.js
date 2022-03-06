import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: undefined,
    },
    reducers: {
        getCurrentUser: () => {
            
        },
        login: () => {},
        logout: () => {}
    }
});


export default authSlice.reducer;