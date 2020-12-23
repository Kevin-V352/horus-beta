//<---React--->//
import React, { useState, useEffect } from 'react';

//<--- Axios--->//
import axios from 'axios';


//<--- Material--->//
import {
    Card,
    CardContent,
    Typography
} from '@material-ui/core';

//<--- API-Key--->//
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY



const CardLocation = ({ lat, lon, name}) => {

    const [currentWeather, setCurrentWeather] = useState({
        temp: '',
        backgroundId: '',
        description: ''
    })

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es&units=metric`)
        .then(response => {
            console.log(response)
            setCurrentWeather({
                temp: response.data.main.temp,
                backgroundId: response.data.weather[0].icon,
                description: response.data.weather[0].description
            });  
        })
    },[]);

    return (
        <Card>
            <CardContent>
                <Typography>
                    {name}
                </Typography>
                <Typography>
                    {currentWeather.temp}
                </Typography>
                <Typography>
                    {currentWeather.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardLocation;