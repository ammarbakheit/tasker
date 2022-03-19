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
import { addTask, deleteAllTask, deleteTask, editTask, getTasks } from "../Features/Task/Redux/TaskSlice";
import { addNewTaskSaga, deleteAllTasksSaga, deleteAtaskSaga, EditAtaskSaga, getAllTasksSaga } from "../Features/Task/Redux/Sagas/taskSaga";

export function* watcherSaga() {
    yield takeLatest(getTasks.type, getAllTasksSaga);
    yield takeLatest(addTask.type, addNewTaskSaga);
    yield takeLatest(deleteAllTask.type, deleteAllTasksSaga);
    yield takeLatest(editTask.type, EditAtaskSaga);
    yield takeLatest(deleteTask.type, deleteAtaskSaga);


    //Auth sagas
    yield takeLatest(getCurrentUser.type, getCurrentUserSaga);
    yield takeLatest(login.type, loginSaga);
    yield takeLatest(logout.type, logoutSaga);

} 