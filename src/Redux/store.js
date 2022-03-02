import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware  from '@redux-saga/core';
import { applyMiddleware, } from 'redux';
import { watcherSaga } from './Sagas/RootSaga';
import taskReducer from "./TaskSlice";

const sagaMiddleware = createSagaMiddleware();



 const store = configureStore({ 
    reducer: taskReducer,
    middleware: [sagaMiddleware]
} );
sagaMiddleware.run(watcherSaga);
 
export default store;