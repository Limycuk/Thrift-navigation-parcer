import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import createStore, { history } from '../../store';
import Header from '../Header';
import Home from '../../pages/Home';
import UrlList from '../../pages/UrlList';

const { store } = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/urls" component={UrlList} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default withStyles(styles)(App);
