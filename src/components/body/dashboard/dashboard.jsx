import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast } from '../../../redux/actions-creators/weather';
import { Box } from '@material-ui/core';

import PrincipalInfo from './principal-info/principal-info';

import dashboardStyles from './dashboard-material-styles'; 

const Dashboard = () => {

    const dispatch = useDispatch();
    const weather = useSelector((state) => state);

    useEffect(() => {
        dispatch(getForecast('40.4167047', '-3.7035825'));
    }, []);

    const classes = dashboardStyles();

    return (
        <div>
            <Box className={classes.root} fluid>
                <PrincipalInfo
                    name={weather.timeZone}
                    currentTemp={Math.round(weather.current.temp)}
                    description={weather.current.weather[0].description}
                    humidity={weather.current.humidity}
                    windSpeed={weather.current.wind_speed}
                    visibility={weather.current.visibility}
                    pressure={weather.current.pressure}
                    dewPoint={Math.round(weather.current.dew_point)}
                />
            </Box>
        </div>
    );
};

export default Dashboard;