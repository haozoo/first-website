import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import FAQ from './pages/FAQ';
import Profile from './pages/Profile';

const Main = () => {
  return (
    <Switch>
      {' '}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Shop' component={Shop}></Route>
      <Route exact path='/FAQ' component={FAQ}></Route>
      <Route exact path='/Profile' component={Profile}></Route>
    </Switch>
  );
};

export default Main;
