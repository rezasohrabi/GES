import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/User/user.actions'
// layouts
import MainLayout from './layouts/MainLayout';
// pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Recovery from './pages/Recovery';

class App extends Component {

  authListener = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.authListener = auth.onAuthStateChanged(async userAuth => {
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
  }

  componentWillUnmount() {
    this.authListener();
  }

  render(){
    const { currentUser } = this.props;
    return (
      <React.Fragment>
          <Switch>
            <Route exact path='/' render={() => (
              <MainLayout>
                <Homepage />
              </MainLayout>
            )} />
            <Route path='/register' render={() => currentUser? <Redirect to='/' /> : (
              <MainLayout>
                <Registration />
              </MainLayout>
            )} />
            <Route path='/login' render={() => currentUser ? <Redirect to='/' /> : (
              <MainLayout>
                <Login />
              </MainLayout>
            )} />
            <Route path='/reset-password' render={() => (
              <MainLayout>
                <Recovery />
              </MainLayout>
            )} />
          </Switch> 
      </React.Fragment> 
    );
  }
};

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
