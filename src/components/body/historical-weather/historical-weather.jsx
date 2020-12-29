//<---React--->//
import React, { useEffect, useState } from 'react';

//<--- Redux--->//
import { useSelector } from 'react-redux';

//<--- Axios--->//
import axios from 'axios';

//<--- Material--->//
import {
    Box,
    Grid
} from '@material-ui/core';

//styles
import historicalWeatherStyles from './historical-weather-material-styles';

//----Components----//
import HistoricalWeatherChart from './historical-weather-chart/historical-weather-chart';
import HistoricalChart from './historical-chart/historical-chart';

//<--- API-Key--->//
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const HistoricalData = () => {

    const classes = historicalWeatherStyles();

    const weather = useSelector((state) => state);

    const [pastDays, setPastDays] = useState([]);
    const [historyArr, setHistoryArr] = useState({});
    const [currentIndex, setCurrentIndex] = useState(4);

    const handlerPastDays = timeZone => {

        const currentDay = new Date().toLocaleDateString('en-GB', { timeZone: timeZone });
        let resultDay, dayUNIX;
        let historicalArr = [];

        for (let i = 1; i < 6; i++) {
            resultDay = new Date().setDate(parseInt(currentDay.slice(0, 2)) - i);
            dayUNIX = resultDay.toString().slice(0, resultDay.toString().length - 3);
            historicalArr.unshift(dayUNIX);
        };
        return historicalArr;
    };

    const dateFormat = (index, timeZone, long) => {
        const week = ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sá'];
        const currentDay = new Date().toLocaleDateString('en-GB', { timeZone: timeZone }); //Dia actual de la localizacion buscada.
        const resultDay = new Date().setDate(parseInt(currentDay.slice(0, 2)) - ((long + 1) - (index + 1))); //Dia de la semana en milisegundos.

        return week[new Date(resultDay).getUTCDay()] + ". " + new Date(resultDay).getUTCDate().toString(); //Retorna el dia de la semana junto con su numero de fecha.
    };

    const setHistoricalChart = dayUNIX => {
        const [lat, lon] = weather.coordinates;
        const historicalTemp = [];
        const historicalHours = [];
        axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dayUNIX}&appid=${API_KEY}&lang=es&units=metric`)
            .then(day => {
                day.data.hourly.map(hour => historicalTemp.push(Math.round(hour.temp)));
                for (let i = 0; i < 24; i++) {
                    historicalHours.push(`${i}:00`);
                };
                setHistoryArr({
                    historicalTemp,
                    historicalHours
                });
            })
            .catch(error => console.log(`Error en la peticion: ${error}`))
    };

    useEffect(() => {
        setPastDays(handlerPastDays(weather.timeZone))
    }, [weather]);

    return (
        <Box className={classes.root}>
            <Grid container className={classes.cardContainer}>
                {
                    pastDays.map((pastDay, index) => (
                        <Grid item xs={2} key={index}>
                            <HistoricalWeatherChart
                                dayUNIX={pastDay}
                                date={dateFormat(index, weather.timeZone, pastDays.length)}
                                setHistoricalChart={setHistoricalChart}
                                index={index}
                                currentIndex={currentIndex}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            <HistoricalChart
                data={historyArr}
            />
        </Box>
    );
};

export default HistoricalData;