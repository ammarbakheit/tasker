import { addTask, getTasks, checkTask, deleteTask  } from "../../Features/Task/TaskSlice";
import { addNewTask, checkAtask, getAllTasks, deleteAtask } from "./taskSaga";
import { call, takeEvery, put } from "redux-saga/effects";

export function* watcherSaga() {
    yield takeEvery(getTasks.type, getAllTasks);
    yield takeEvery(addTask.type, addNewTask);
    yield takeEvery(checkTask.type, checkAtask);
    yield takeEvery(deleteTask.type, deleteAtask);

} 