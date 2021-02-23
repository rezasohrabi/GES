import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import WithAuth from './hoc/withAuth';
// layouts
import MainLayout from './layouts/MainLayout';
// pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import { checkUserSession } from './redux/User/user.actions';

const App = props => {
  const  dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <React.Fragment>
        <Switch>
          <Route exact path='/' render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )} />
          <Route path='/register' render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
          <Route path='/login' render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )} />
          <Route path='/reset-password' render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )} />
          <Route path='/dashboard' render={ () => (
            <WithAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </WithAuth>
          )} />
        </Switch> 
    </React.Fragment> 
  );
};

export default App;
