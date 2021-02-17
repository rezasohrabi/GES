import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header'
import HeroHeader from './components/HeroHeader'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <HeroHeader />
    </React.Fragment> 
  );
}

export default App;
