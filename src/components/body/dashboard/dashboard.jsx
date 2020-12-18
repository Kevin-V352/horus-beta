//<---React--->//
import React, { useEffect } from 'react';

//<--- Redux--->//
import { useDispatch } from 'react-redux';
import { getForecast } from '../../../redux/actions-creators/weather';

//<--- Material--->//
import { Box } from '@material-ui/core';

//styles
import dashboardStyles from './dashboard-material-styles'; 

//<--- Components --->//
import PrincipalInfo from './principal-info/principal-info';
import LetterForecast from './letter-forecast/letter-forecast';
import DailyChart from './daily-chart/daily-chart';

const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getForecast('40.4167047', '-3.7035825'));
    }, []);

    const classes = dashboardStyles();


    return (
            <Box className={classes.root}>
                <PrincipalInfo/>
                <LetterForecast/>
                <DailyChart/>
            </Box>
    );
};

export default Dashboard;