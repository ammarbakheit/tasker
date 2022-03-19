import {put, all,call} from 'redux-saga/effects'; 
import TaskRepository from '../../Repository/TaskRepository';

import { setTasksSucess, setTasksFailure, deleteAllTaskSuccess, deleteAllTaskFailure, addTaskSuccess, addTaskFailure, getTasks, deleteTaskSuccess, deleteTaskFailure, editTaskFailure } from '../TaskSlice';

const taskRepo = new TaskRepository();


export function* getAllTasksSaga() {
 try { 
       const response = yield call(() => taskRepo.getAllTasksService());
        console.log("all tasks are ", response);
       yield put(setTasksSucess(response))
    } catch ( e) {
     yield  put(setTasksFailure(e))
    }
}


export function* addNewTaskSaga(action) {
    try {
        const response = yield call(() => taskRepo.addNewTaskService(action.payload));
        yield put(addTaskSuccess(response));
    } catch (e) {
        yield put(addTaskFailure(e));
    }
}
export function* EditAtaskSaga(action) {
    try {
        yield call(() => taskRepo.editATaskService(action.payload));
        const response =  yield call(() => taskRepo.getAllTasksService());
        
        yield put(setTasksSucess(response));

    } catch (e) {
        yield put(editTaskFailure(e))
    }
}

export function* moveAtaskSaga(action) {
    try {
    } catch (e) {
        console.log(e);
    }
}

export function* deleteAtaskSaga(action) {
    try {
       yield call(() => taskRepo.deleteATaskService(action.payload))
     const response =   yield call(() => taskRepo.getAllTasksService())
     yield put(setTasksSucess(response));
    } catch (e) {
        yield put(deleteTaskFailure());

    }
}
export function* deleteAllTasksSaga(action) {
    try {
      const response = yield call(() => taskRepo.deleteAllTasksService());
      yield put(deleteAllTaskSuccess(response))
    } catch (e) {
        yield put(deleteAllTaskFailure(e))
        console.log(e);
    }
}