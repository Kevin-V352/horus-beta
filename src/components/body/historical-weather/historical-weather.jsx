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
import HistoricalDate from './historical-date/historical-date';

//<--- API-Key--->//
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const HistoricalData = () => {

    const classes = historicalWeatherStyles();

    const weather = useSelector((state) => state);

    const [pastDays, setPastDays] = useState([]);
    const [historyArr, setHistoryArr] = useState({});
    const [currentIndex, setCurrentIndex] = useState(4);
    const [date, setDate] = useState('');

    const handlerPastDays = timeZone => {

        const currentDay = new Date().toLocaleDateString('en-GB', { timeZone: timeZone });
        let resultDay, dayUNIX;
        let historicalArr = [];
        for (let i = 1; i < 6; i++) {
            resultDay = new Date().setDate(parseInt(currentDay.slice(0, 2)) - i);
            /* console.log(Math.floor(new Date(resultDay).getTime() / 1000)) */
            /* console.log(resultDay.toString().slice(0, resultDay.toString().length - 3)) */
            dayUNIX = Math.floor(new Date(resultDay).getTime() / 1000);
            historicalArr.unshift(dayUNIX);
        };
        return historicalArr;
    };

    const dateFormat = (index, timeZone, long) => {
        const week = ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sá'];
        const currentDay = new Date().toLocaleDateString('en-GB', { timeZone: timeZone }); //Dia actual de la localizacion buscada.
        const resultDay = new Date().setDate(parseInt(currentDay.slice(0, 2)) - ((long + 1) - (index + 1))); //Dia de la semana en milisegundos.

        return week[new Date(resultDay).getUTCDay()] + ". " + new Date(resultDay).getDate().toString(); //Retorna el dia de la semana junto con su numero de fecha.
    };

    const setHistoricalChart = dayUNIX => {
        const [lat, lon] = weather.coordinates;
        const historicalTemp = [];
        const historicalHours = [];
        setCurrentDate(dayUNIX);
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

    const setCurrentDate = dayUNIX => {
        const selector = new Date(dayUNIX * 1000);
        const week = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
        const months = ['spaceIndex', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const dayName = week[selector.getDay()];
        const date = selector.toLocaleDateString().split('/');
        const [day, month, year] = date;
        setDate(`${dayName}, ${day} de ${months[month]} de ${year}`);
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
            <HistoricalDate
                date={date}
            />
            <HistoricalChart
                data={historyArr}
            />
        </Box>
    );
};

export default HistoricalData;