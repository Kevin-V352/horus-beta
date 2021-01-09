//<---React--->//
import React, { useState } from 'react';

//<--- Redux--->//
import { useSelector } from 'react-redux';

//<---Routing--->//
import { Route, Redirect } from 'react-router-dom';

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
import WelcomePage from './components/body/welcome-page/welcome-page';

const App = () => {

	const weather = useSelector(state => state);

	const backgroundId = useSelector((state) => state.current.weather ? state.current.weather[0].icon : null);

	const [validate, setValidate] = useState(false);

	const appStyles = makeStyles(theme => ({
		root: {
			backgroundImage: `url(./backgrounds/${backgroundId}.jpg)`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundAttachment: 'fixed',
			transition: '2s'
		}
	}));

	const classes = appStyles();

	if(weather.coordinates.length === 0) {
		return <WelcomePage/>
	};

	return (
		<ThemeProvider theme={theme}>
			<Box className={classes.root}>
				<Route path='/' component={Header}/>
				<Route exact path='/Start' component={WelcomePage}/>
				<Route exact path='/Dashboard' component={Dashboard} />
				<Route exact path='/Map' component={Map} />
				<Route exact path='/FavoriteList' component={FavoriteList} />
				<Route exact path='/HistoricalWeather' component={HistoricalWeather} />
			</Box>
		</ThemeProvider>
	);
}

export default App;
