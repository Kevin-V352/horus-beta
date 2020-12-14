import { GET_FORECAST } from '../actions-types';

const initialState = {
    current: {},
    daily: [],
    hourly: [],
    timeZone: '',
}

function wheaterReducer (state = initialState, action) {
    switch (action.type) {
        case GET_FORECAST:
            return {
                ...state,
                current: action.payload.current,
                daily: action.payload.daily,
                hourly: action.payload.hourly,
                timeZone: action.payload.timezone
            }
    
        default:
            return state;
    }
}

export default wheaterReducer;