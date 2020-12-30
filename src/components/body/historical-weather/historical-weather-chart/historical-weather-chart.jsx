//<---React--->//
import React, { useEffect, useState, useRef } from 'react';

//<--- Material--->//
import Skeleton from '@material-ui/lab/Skeleton';
import {
    Card,
    CardContent,
    CardActionArea,
    Typography,
    IconButton,
    Grid,
} from '@material-ui/core';

//styles
import historicalChartStyles from './historical-weather-chart-material-styles';

const HistoricalWeatherChart = ({ dayUNIX, date, setHistoricalChart, index, currentIndex }) => {

    const classes = historicalChartStyles();

    const card = useRef(null);

    useEffect(() => {
        if (index === currentIndex) card.current.click();
    }, [dayUNIX]);

    return (
        <Card ref={card} className={classes.root} onClick={() => setHistoricalChart(dayUNIX)}>
            <CardActionArea>
                <CardContent className={classes.content}>
                    <Typography>
                        {date}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default HistoricalWeatherChart;