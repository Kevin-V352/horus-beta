import React from 'react';

//<--- Redux--->//
import { useSelector } from 'react-redux';

//<--- Material--->//
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import PrincipalInfoStyles from './principal-info-material-styles';

const PrincipalInfo = ({ name, currentTemp, description, humidity, windSpeed, visibility, pressure, dewPoint }) => {

    const classes = PrincipalInfoStyles();

    const changeFormat = (str) => {
        let chars = {
            '/':', ',
            '_': ' '
        };
        return str.replace(/[/_]/g, m => chars[m]);
    };

    const ChangeDescription = (str) => {
        if(!str) return undefined
        return str.replace(str[0], str[0].toUpperCase());
    };

    return (
        <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {changeFormat(name)}
                </Typography>
                <Typography className={classes.currentTemp} variant="h5" component="h2">
                    {currentTemp} °C
                </Typography>
                <Typography className={classes.description} color="textSecondary">
                    {ChangeDescription(description)}
                </Typography>
                <Grid container>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Barómetro: {pressure} hPa</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Viento: {windSpeed}</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Visibilidad: {visibility/1000}km</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Sensación térmica: {currentTemp}°C</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Humedad: {humidity}%</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Punto de roció: {dewPoint}°C</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default PrincipalInfo;