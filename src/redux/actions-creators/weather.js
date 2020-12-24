//<--- Axios--->//
import axios from 'axios';

//<--- Action-types--->//
import { GET_FORECAST, ADD_FAVORITE, DELETE_FAVORITE } from '../actions-types';

//<--- API-Key--->//
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY

export function getForecast (lat, lon, nameLocation) {
    return function (dispatch) {
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es&units=metric`)
        .then(wheater => {
            const currentLocation = {
                nameLocation,
                coordinates: [lat, lon] 
            };

            dispatch({
                type: GET_FORECAST,
                payload: wheater.data,
                currentLocation
            });
        })
        .catch (error => console.log('ERROR_WEATHER_API ', error))
    };
};

export function addFavorite (lat, lon, name) {
    return function (dispath) {
        const ref = {
            name,
            lat,
            lon
        }
        dispath({
            type: ADD_FAVORITE,
            payload: ref
        })
    };
};

export function deleteFavorite (name) {
    return function (dispatch) {
        dispatch({
            type: DELETE_FAVORITE,
            name
        })
    };
};
