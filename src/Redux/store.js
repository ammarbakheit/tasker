import { configureStore } from '@reduxjs/toolkit';
import taskReducer  from '../Features/Task/TaskSlice';
import createSagaMiddleware  from '@redux-saga/core';
import { applyMiddleware, } from 'redux';
import { watcherSaga } from './Sagas/RootSaga';

const sagaMiddleware = createSagaMiddleware();



 const store = configureStore({ 
    reducer: taskReducer,
    middleware: [sagaMiddleware]
} );
sagaMiddleware.run(watcherSaga);

export default store;