import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducer';
import rootSaga from './Saga';

const sagaMiddleware = createSagaMiddleware()
const middleWar = [sagaMiddleware]

const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(middleWar),
})

sagaMiddleware.run(rootSaga)
export default store