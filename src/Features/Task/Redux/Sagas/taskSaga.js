import {put, call} from 'redux-saga/effects'; 
import { addNewTasktoServer, checkSingleTask, deleteSingleTask, fetchAllTasks } from '../../Data/remoteDataSource';

import { TaskRepository } from '../../Features/Task/Repository/TaskRepository';


export function* getAllTasksSaga() {
   
 try { 
        const response = yield call( () =>  fetchAllTasks());
        // yield put(setTasksFailures(response))
    } catch ( e) {
        console.log(e);
    }
}


export function* addNewTaskSaga(action) {
    // console.log(action.payload);
    try {
        const response =  yield call(() => addNewTasktoServer(action.payload) ) ;
        // yield put(setTasks(response));
    } catch (e) {

    }
}

export function* checkAtaskSaga(action) {
    try {
        const response = yield call( () =>  checkSingleTask(action.payload));
        // yield put(setTasks(response));
    } catch (e) {
        console.log(e);
    }
}

export function* deleteAtaskSaga(action) {
    try {
        const response = yield call( () =>  deleteSingleTask(action.payload));
        // yield put(setTasks(response));
    } catch (e) {
        console.log(e);
    }
}