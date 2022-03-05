import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware  from '@redux-saga/core';
import { applyMiddleware, combineReducers, } from 'redux';
import { watcherSaga } from './Sagas/RootSaga';
import taskReducer from "./TaskSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    task:taskReducer,
  
  })

 const store = configureStore({ 
    reducer,
    middleware: [sagaMiddleware]
} );
sagaMiddleware.run(watcherSaga);
 
export default store;