//<---React--->//
import React from 'react';

//<--- Redux--->//
import { useSelector } from 'react-redux';

//<--- Material--->//
import { 
    Card,
    CardContent, 
    Typography, 
    Grid 
} from '@material-ui/core';

//styles
import PrincipalInfoStyles from './principal-info-material-styles';

const PrincipalInfo = () => {

    const weather = useSelector((state) => state);

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
                    {changeFormat(weather.timeZone)}
                </Typography>
                <Typography className={classes.currentTemp} variant="h5" component="h2">
                    {Math.round(weather.current.temp)} °C
                </Typography>
                <Typography className={classes.description} color="textSecondary">
                    {ChangeDescription(weather.current.weather ? weather.current.weather[0].description : null)}
                </Typography>
                <Grid container>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Barómetro: {weather.current.pressure} hPa</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Viento: {weather.current.wind_speed}</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Visibilidad: {weather.current.visibility/1000}km</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Sensación térmica: {Math.round(weather.current.temp)}°C</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Humedad: {weather.current.humidity}%</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Punto de roció: {Math.round(weather.current.dew_point)}°C</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default PrincipalInfo;