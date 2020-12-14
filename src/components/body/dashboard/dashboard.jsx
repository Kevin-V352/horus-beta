import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast } from '../../../redux/actions-creators/weather';
import { Container } from '@material-ui/core';

import PrincipalInfo from './principal-info/principal-info';

import dashboardStyles from './dashboard-material-styles'; 

const Dashboard = () => {

    const dispatch = useDispatch();
    const wheater = useSelector((state) => state);

    useEffect(() => {
        dispatch(getForecast('40.4167047', '-3.7035825'));
    }, []);

    const classes = dashboardStyles();

    return (
        <div>
            <Container className={classes.root}>
                <PrincipalInfo
                    name={wheater.timeZone}
                    currentTemp={Math.round(wheater.current.temp)}
                /* description={wheater.current.weather[0].description} */
                />
            </Container>
        </div>
    );
};

export default Dashboard;