import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';

//styles
import letterForecastStyles from './letter-forecast-material-styles';

const LetterForecast = ({ weeklyForecast }) => {

    const classes = letterForecastStyles();

    const ChangeDescription = (str) => {
        return str.replace(str[0], str[0].toUpperCase());
    };

    const dateFormat = (index) => {
        const week = ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sá'];
        const today = new Date ();
        const forecastDay = new Date();
        const resultDay = forecastDay.setDate(today.getDate() + (index + 1));

        return week[new Date(resultDay).getUTCDay()] + ". " +  new Date (resultDay).getUTCDate().toString();
    };

    return (
        <Grid container className={classes.root}>
            {
                weeklyForecast.slice(1).map((day, index) => (
                    <Grid item lg={1.5}>
                        <Paper className={classes.paper} index={index}>
                            <Typography className={classes.date}>
                                {dateFormat(index)}
                            </Typography>
                            <Grid container className={classes.tempBox}>
                                <Typography className={classes.tempMax}>
                                    {Math.round(day.temp.max)}°
                                </Typography>
                                <Typography className={classes.tempMin}>
                                    {Math.round(day.temp.min)}°
                                </Typography>
                            </Grid>
                            <Typography className={classes.description}>
                                {ChangeDescription(day.weather[0].description)}
                            </Typography>
                        </Paper>
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default LetterForecast;