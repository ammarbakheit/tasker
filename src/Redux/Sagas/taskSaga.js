import {put, call} from 'redux-saga/effects';
import { addNewTasktoServer, checkSingleTask, deleteSingleTask, fetchAllTasks } from '../../Data/remoteDataSource';
import {  setTasks } from "../../Features/Task/TaskSlice";

export function* getAllTasks() {
   
 try { 
        const response = yield call( () =>  fetchAllTasks());
        yield put(setTasks(response))
    } catch ( e) {
        console.log(e);
    }
}


export function* addNewTask(action) {
    // console.log(action.payload);
    try {
        const response =  yield call(() => addNewTasktoServer(action.payload) ) ;
        yield put(setTasks(response));
    } catch (e) {

    }
}

export function* checkAtask(action) {
    try {
        const response = yield call( () =>  checkSingleTask(action.payload));
        yield put(setTasks(response));
    } catch (e) {
        console.log(e);
    }
}

export function* deleteAtask(action) {
    try {
        const response = yield call( () =>  deleteSingleTask(action.payload));
        yield put(setTasks(response));
    } catch (e) {
        console.log(e);
    }
}