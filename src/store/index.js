import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
// const loggerMiddleware = createLogger();
// const middleware = [sagaMiddleware, loggerMiddleware];
const middleware = [sagaMiddleware];


export default configureStore = (onCompletion) => {
  const enhancer = compose(applyMiddleware(...middleware));

  let store = createStore(rootReducer, enhancer);
  let persistor = persistStore(store, onCompletion);
  sagaMiddleware.run(rootSaga);
  return {persistor, store};
};
