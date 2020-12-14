import { createStore, applyMiddleware, compose } from "redux";
import wheaterReducer from '../reducers/wheater-reducer';
import thunk from "redux-thunk";


const store = createStore(
    wheaterReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;