import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { checkUserSession } from './redux/User/user.actions';
import AdminBar from './components/AdminBar';
//hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth'
// layouts
import MainLayout from './layouts/MainLayout';
// pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin'

const App = props => {
  const  dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <React.Fragment>
        <AdminBar />
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
          <Route path='/admin' render={ () => (
            <WithAdminAuth>
              <MainLayout>
                <Admin />
              </MainLayout>
            </WithAdminAuth> 
          )} />
        </Switch> 
    </React.Fragment> 
  );
};

export default App;
