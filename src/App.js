import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './redux/User/user.actions';
//hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';
// layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';
// pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Search from './pages/Search';

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
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </WithAuth>
          )} />
          <Route path='/admin' render={ () => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth> 
          )} />
          <Route path='/search' render={ () => (
            <MainLayout>
              <Search />
            </MainLayout>
          )} />
        </Switch> 
    </React.Fragment> 
  );
};

export default App;
