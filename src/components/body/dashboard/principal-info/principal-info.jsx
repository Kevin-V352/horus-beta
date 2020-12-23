//<---React--->//
import React from 'react';

//<--- Redux--->//
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite } from '../../../../redux/actions-creators/weather';

//<--- Material--->//
import { 
    Card,
    CardContent, 
    Typography, 
    Grid,
    IconButton,
} from '@material-ui/core';

//styles
import PrincipalInfoStyles from './principal-info-material-styles';

//Icons
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const PrincipalInfo = () => {

    const dispatch = useDispatch();

    const weather = useSelector((state) => state);

    const classes = PrincipalInfoStyles();

    /* const changeFormat = (str) => {
        let chars = {
            '/':', ',
            '_': ' '
        };
        return str.replace(/[/_]/g, m => chars[m]);
    }; */

    const ChangeDescription = (str) => {
        if(!str) return undefined
        return str.replace(str[0], str[0].toUpperCase());
    };

    const handlerFavorite = weather => {
        const [ lat, lon ] = weather.coordinates;
        const name = weather.nameLocation
        dispatch(addFavorite(lat, lon, name));
    };

    return (
        <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
                <IconButton onClick={() => handlerFavorite(weather)}>
                    <BookmarkBorderIcon style={{color: 'white'}}/>
                </IconButton>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {weather.nameLocation}
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