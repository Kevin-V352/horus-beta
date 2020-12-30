import { createStore, applyMiddleware, compose } from "redux";
import wheaterReducer from '../reducers/wheater-reducer';
import thunk from "redux-thunk";

const saveToLocaleStorage = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);

    } catch(e) {
        console.log(e)
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState)
    } catch(e) {
        console.log(e)
    }
};

const persistedState = loadFromLocalStorage();

const store = createStore(
    wheaterReducer,
    persistedState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(() => saveToLocaleStorage(store.getState()));

export default store;