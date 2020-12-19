//<---React--->//
import React from 'react';

//<--- Redux--->//
import { useSelector } from 'react-redux';

//<---Routing--->//
import { Route } from 'react-router-dom';

//<--- Material--->//
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

//----Components----//
import Header from './components/header/header';
import Dashboard from './components/body/dashboard/dashboard';

const App = () => {

  const backgroundId = useSelector((state) => state.current.weather ? state.current.weather[0].icon.slice(0, 2) : null);

  const appStyles = makeStyles(theme => ({
    root: {
      backgroundImage: `url(./backgrounds/${backgroundId}.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    }
  }));

  const classes = appStyles();

  return (
    <Box className={classes.root}>
      <Route path='/' component={Header} />
      <Route exact path='/Dashboard' component={Dashboard} />
    </Box>
  );
}

export default App;
