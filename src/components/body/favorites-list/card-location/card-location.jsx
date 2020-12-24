//<---React--->//
import React, { useState, useEffect } from 'react';

//<--- Redux--->//
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../../../../redux/actions-creators/weather';

//<--- Axios--->//
import axios from 'axios';

//<--- Material--->//
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Grid,
} from '@material-ui/core';

//styles
import cardLocationStyles from './card-location-material-styles';

//icons
import BackspaceIcon from '@material-ui/icons/Backspace';

//<---CSS-styles--->//
import styles from './card-location.module.css';

//<--- API-Key--->//
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const CardLocation = ({ lat, lon, name }) => {

    const dispatch = useDispatch();

    const classes = cardLocationStyles();

    const [currentWeather, setCurrentWeather] = useState({
        temp: '',
        backgroundId: '',
        description: ''
    })

    const ChangeDescription = str => {
        if (!str) return undefined
        return str.replace(str[0], str[0].toUpperCase());
    };

    const handlerDelete = name => dispatch(deleteFavorite(name));

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es&units=metric`)
            .then(response => {
                setCurrentWeather({
                    temp: response.data.main.temp,
                    backgroundId: response.data.weather[0].icon,
                    description: response.data.weather[0].description
                });
            })
    }, []);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container>
                    <Grid item xs={1}/>
                    <Grid item xs={10}>                       
                        <Typography className={classes.title}>
                            {name}
                        </Typography>
                        <Typography className={classes.temp}>
                            {Math.round(currentWeather.temp)}°C
                        </Typography>
                        <div className={styles.container}>
                            <img src={`./svg-weather-icons/${currentWeather.backgroundId}.svg`} alt="weather-icon" className={styles.icon}/>
                        </div>
                        <Typography className={classes.description}>
                            {ChangeDescription(currentWeather.description)}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton 
                            onClick={() => handlerDelete(name)}
                            className={classes.button}
                        >
                            <BackspaceIcon className={classes.icon} />
                        </IconButton>
                    </Grid> 
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CardLocation;