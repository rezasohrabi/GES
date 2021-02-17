import React from 'react';
import { Switch, Route } from 'react-router-dom';
// layouts
import MainLayout from './layouts/MainLayout'
// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';


function App() {
  return (
    <React.Fragment>
        <Switch>
          <Route exact path='/' render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )} />
          <Route exact path='/register' render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
        </Switch> 
    </React.Fragment> 
  );
};

export default App;
