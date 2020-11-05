import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { UNSPLASH, unsplashReducer } from './../features/ImageGrid/slice';
import unsplashSaga from '../features/ImageGrid/saga';

export const rootReducer = combineReducers({
  [UNSPLASH]: unsplashReducer,
});

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([fork(unsplashSaga)]);
}

function createStore() {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'production' ? false : true,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export default createStore;
