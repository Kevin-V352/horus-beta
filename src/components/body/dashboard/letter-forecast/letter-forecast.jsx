import React from 'react';
import { Typography, Grid, Paper, Box } from '@material-ui/core';


//styles
import letterForecastStyles from './letter-forecast-material-styles';

const LetterForecast = ({ weeklyForecast, timeZone }) => {

    const classes = letterForecastStyles();

    const ChangeDescription = (str) => {
        return str.replace(str[0], str[0].toUpperCase());
    };


    const dateFormat = (index, timeZone) => {
        const week = ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sá'];
        const currentDay = new Date().toLocaleDateString('en-GB', { timeZone: timeZone }); //Dia actual de la localizacion buscada.
        const resultDay = new Date().setDate(parseInt(currentDay.slice(0, 2)) + (index + 1)); //Dia de la semana en milisegundos.

        return week[new Date(resultDay).getUTCDay()] + ". " + new Date(resultDay).getUTCDate().toString(); //Retorna el dia de la semana junto con su numero de fecha.
    };

    return (
        <Grid container className={classes.root}>
            {
                weeklyForecast.slice(1, 7).map((day, index) => (
                    <Grid item lg={1} key={index}>

                        <Typography className={classes.date}>
                            {dateFormat(index, timeZone)}
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

                    </Grid>
                ))
            }
        </Grid>
    );
};

export default LetterForecast;