import { createSlice } from "@reduxjs/toolkit";
import Status from "../../../Common/Status";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: undefined,
        status: Status.idle
    },
    reducers: {
        getCurrentUser: () => {},
        getCurrentUserSuccess: (state ,action) => {
            state.user = action.payload;
            state.status = Status.success;
        },
        getCurrentUserFailed: (state ,action) => {
            state.user = undefined;
            state.status = Status.failure;
        },

        login: (state, action) => {},
        loginSuccess: (state, action) => {},
        loginFailed: (state, action) => {},

        logout: () => {},
        logoutSuccess: (state, action) => {
            state.user = undefined;
            state.status = Status.success;

        },
        logoutFailed: (state, action) => {
            state.status = Status.failure;
        }
    }
});

export const { 
    getCurrentUser,
    getCurrentUserFailed,
    getCurrentUserSuccess,

    login,
    loginSuccess,
    loginFailed,

    logout,
    logoutSuccess,
    logoutFailed
} = authSlice.actions;

export default authSlice.reducer;