import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import config from 'config';
import rootSaga from './sagas';
import reducer from './reducers';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    (config.isActiveDevTool && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return { store };
};
