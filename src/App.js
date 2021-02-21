import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/User/user.actions'
import WithAuth from './hoc/withAuth';
// layouts
import MainLayout from './layouts/MainLayout';
// pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';

const App = props => {
  const { currentUser, setCurrentUser } = props;

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      authListener();
    };
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

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
