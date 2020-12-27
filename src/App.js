//<---React--->//
import React from 'react';

//<--- Redux--->//
import { useSelector } from 'react-redux';

//<---Routing--->//
import { Route } from 'react-router-dom';

//<--- Material--->//
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'

//theme
import theme from './theme-config';

//----Components----//
import Header from './components/header/header';
import Dashboard from './components/body/dashboard/dashboard';
import Map from './components/body/map/map';
import FavoriteList from './components/body/favorites-list/favorite-list';
import HistoricalWeather from './components/body/historical-weather/historical-weather';

const App = () => {

	const backgroundId = useSelector((state) => state.current.weather ? state.current.weather[0].icon : null);

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
		<ThemeProvider theme={theme}>
			<Box className={classes.root}>
				<Route path='/' component={Header} />
				<Route exact path='/Dashboard' component={Dashboard} />
				<Route exact path='/Map' component={Map} />
				<Route exact path='/FavoriteList' component={FavoriteList} />
				<Route exact path='/HistoricalWeather' component={HistoricalWeather} />
			</Box>
		</ThemeProvider>
	);
}

export default App;
