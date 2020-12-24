//<---React--->//
import React from 'react';

//<--- Redux--->//
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../../../redux/actions-creators/weather';

//<--- Material--->//
import {
    Card,
    CardContent,
    Typography,
    Grid,
    IconButton,
    Tooltip
} from '@material-ui/core';

//styles
import PrincipalInfoStyles from './principal-info-material-styles';

//Icons
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

//<---CSS-styles--->//
import styles from './principal-info.module.css';

const PrincipalInfo = () => {

    const dispatch = useDispatch();

    const weather = useSelector((state) => state);

    const classes = PrincipalInfoStyles();

    const ChangeDescription = str => {
        if (!str) return undefined
        return str.replace(str[0], str[0].toUpperCase());
    };

    const validate = name => {
        const found = weather.favoriteLocations.find(location => location.name === name);
        if (found) return true;
        return false;
    }

    const handlerFavorite = weather => {
        const [lat, lon] = weather.coordinates;
        const name = weather.nameLocation;

        if (validate(name)) return dispatch(deleteFavorite(name));
        dispatch(addFavorite(lat, lon, name));
    };

    const setIcon = weather => {
        const backgroundId = weather.current.weather ? weather.current.weather[0].icon : null;
        return `./svg-weather-icons/${backgroundId}.svg`
    };

    return (
        <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {weather.nameLocation}
                        </Typography>
                        <Typography className={classes.currentTemp} variant="h5" component="h2">
                            {Math.round(weather.current.temp)} °C
                        </Typography>
                        <div className={styles.container}>
                            <img src={setIcon(weather)} alt="weather-icon" className={styles.icon}/>
                        </div>
                        <Typography className={classes.description} color="textSecondary">
                            {ChangeDescription(weather.current.weather ? weather.current.weather[0].description : null)}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Tooltip 
                            title={validate(weather.nameLocation) ? 'Eliminar de mis favoritos' : 'Añadir a mis favoritos'} 
                            arrow
                        >
                            <IconButton
                                onClick={() => handlerFavorite(weather)}
                                className={classes.button}
                            >
                                {
                                    validate(weather.nameLocation) ?
                                        <BookmarkIcon className={classes.icon} />
                                        :
                                        <BookmarkBorderIcon className={classes.icon} />
                                }
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Barómetro: {weather.current.pressure} hPa</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Viento: {weather.current.wind_speed}</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography className={classes.infoItems}>Visibilidad: {weather.current.visibility / 1000}km</Typography>
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