import { call, takeEvery, takeLatest,  put } from "redux-saga/effects";
import {  
    getCurrentUser,
    getCurrentUserFailed,
    getCurrentUserSuccess,

    login,
    loginSuccess,
    loginFailed,

    logout,
    logoutSuccess,
    logoutFaile } from "../Features/Auth/Redux/AuthSlice";
import { getCurrentUserSaga, loginSaga, logoutSaga } from "../Features/Auth/Redux/auth-saga";

export function* watcherSaga() {
    // yield takeLatest(getTasks.type, getAllTasks);
    // yield takeLatest(addTask.type, addNewTask);
    // yield takeLatest(checkTask.type, checkAtask);


    //Auth sagas
    yield takeLatest(getCurrentUser.type, getCurrentUserSaga);
    yield takeLatest(login.type, loginSaga);
    yield takeLatest(logout.type, logoutSaga);

} 