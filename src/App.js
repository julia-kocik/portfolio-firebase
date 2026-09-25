import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import './styles/global.scss';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Project } from './components/views/Project/Project';

const App = () => (
  <Provider store={store}>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/project/:id" component={Project} />
        <Route path="*" component={Homepage} />
      </Switch>
    </MainLayout>
  </Provider>
);

export { App };
