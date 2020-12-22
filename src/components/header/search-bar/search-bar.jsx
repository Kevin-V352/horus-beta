//<--- React --->//
import React, { useState } from 'react';

//<--- Redux--->//
import { useDispatch } from 'react-redux';
import { getForecast } from '../../../redux/actions-creators/weather';

//<--- Autocomplete --->//
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';

//<--- Script-loader --->//
import scriptLoader from 'react-async-script-loader';

//<--- Material --->//
import {
    InputBase,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@material-ui/core';

//styles
import searchUseStyles from './search-bar-material-styles';

//icons
import RoomIcon from '@material-ui/icons/Room';

//<--- API-Key--->//
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const SearchBar = ({ isScriptLoaded, isScriptLoadSucceed }) => {

    const dispatch = useDispatch();
    const classes = searchUseStyles();

    const [adress, setAdress] = useState('');

    const handleSelect = async adress => {
        const result = await geocodeByAddress(adress);
        const coordinates = await getLatLng(result[0]);
        dispatch(getForecast(coordinates.lat, coordinates.lng))
    };

    if (isScriptLoaded && isScriptLoadSucceed) {
        return (
            <PlacesAutocomplete
                value={adress}
                onChange={setAdress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <InputBase
                            {...getInputProps()}
                            placeholder="Buscar…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <List className={classes.list}>
                            {
                                loading ?

                                    <ListItem>Cargando..</ListItem>

                                    :

                                    suggestions.map(suggestion => {
                                        const style = {
                                            backgroundColor: suggestion.active ? 'rgba(91, 94, 104)' : null,
                                            overflow: 'hidden',
                                        }
                                        return (
                                            <ListItem {...getSuggestionItemProps(suggestion, { style })} button>
                                                <ListItemIcon>
                                                    <RoomIcon className={classes.icon}/>
                                                </ListItemIcon>
                                                <ListItemText>
                                                    {suggestion.description}  
                                                </ListItemText>
                                            </ListItem>
                                        )
                                    })
                            }
                        </List>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
    else {
        return <div></div>
    }
};

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`])(SearchBar);

