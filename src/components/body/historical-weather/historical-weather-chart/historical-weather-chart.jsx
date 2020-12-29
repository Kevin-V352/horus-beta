//<---React--->//
import React, { useEffect, useState, useRef } from 'react';

//<--- Material--->//
import Skeleton from '@material-ui/lab/Skeleton';
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Grid,
} from '@material-ui/core';

//styles
import historicalChartStyles from './historical-weather-chart-material-styles';

//<--- Axios--->//
import axios from 'axios';

//<--- API-Key--->//
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;


const HistoricalWeatherChart = ({ lat, lon, dayUNIX, date, setHistoricalChart, index, currentIndex }) => {

    const classes = historicalChartStyles();

    const [dayWeather, setDayWeather] = useState({});

    const card = useRef(null);

    useEffect(async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dayUNIX}&appid=${API_KEY}&lang=es&units=metric`)
            .then(day => {
                console.log('gaa', day.data)
                setDayWeather(day.data);
            })
            .catch(error => console.log(`Error en la peticion: ${error}`))
            if(index === currentIndex) card.current.click();
    }, [lat]);

    return (
        <Card ref={card} className={classes.root} onClick={() => setHistoricalChart(dayWeather.hourly, index)}>
            <CardContent>
                <Typography>
                    {date}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default HistoricalWeatherChart;