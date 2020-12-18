import React from 'react';
import { Route } from 'react-router-dom';


import { Box } from '@material-ui/core';

//----Components----//

import Header from './components/header/header';
import Dashboard from './components/body/dashboard/dashboard';

import appStyles from './app-material-styles';

function App() {
  
  const classes = appStyles();

  return (
    <Box className={classes.root}>
      <Route path='/' component={Header} />
      <Route exact path='/Dashboard' component={Dashboard} />
    </Box>
  );
}

export default App;
