import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware  from '@redux-saga/core';
import { applyMiddleware, combineReducers, } from 'redux';
import { watcherSaga } from './RootSaga';
import taskReducer from "../Features/Task/Redux/TaskSlice";
import authReducer from '../Features/Auth/Redux/AuthSlice';
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    task:taskReducer,
    auth: authReducer
  })

 const store = configureStore({ 
    reducer,
    middleware: [sagaMiddleware]
} );
sagaMiddleware.run(watcherSaga);
 
export default store;