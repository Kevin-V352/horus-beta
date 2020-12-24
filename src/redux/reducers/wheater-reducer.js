import { GET_FORECAST, ADD_FAVORITE, DELETE_FAVORITE } from '../actions-types';

const initialState = {
    current: {},
    daily: [],
    hourly: [],
    nameLocation: '',
    timeZone: '',
    coordinates: [],
    favoriteLocations: []
}

function wheaterReducer (state = initialState, action) {
    switch (action.type) {
        case GET_FORECAST:
            return {
                ...state,
                current: action.payload.current,
                daily: action.payload.daily,
                hourly: action.payload.hourly,
                timeZone: action.payload.timezone,
                nameLocation: action.currentLocation.nameLocation,
                coordinates: action.currentLocation.coordinates
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favoriteLocations: state.favoriteLocations.concat(action.payload)
            };
        case DELETE_FAVORITE:
            return {
                ...state,
                favoriteLocations: state.favoriteLocations.filter(favorite => favorite.name !== action.name)
            };
        default:
            return state;
    }
}

export default wheaterReducer;