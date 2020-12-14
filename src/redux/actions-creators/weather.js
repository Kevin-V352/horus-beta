import axios from 'axios';
import { GET_FORECAST } from '../actions-types';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY

export function getForecast (lat, lon) {
    return function (dispatch){
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es&units=metric`)
        .then(wheater => {
            console.log(wheater.data)
            dispatch({
                type: GET_FORECAST,
                payload: wheater.data
            });
        })
        /* .catch (error => console.log('algo no funca')) */
    }
}