//<---React--->//
import React, { useEffect, useState } from 'react';

//<--- Redux--->//
import { useSelector, useDispatch } from 'react-redux';
import { getForecast } from '../../../redux/actions-creators/weather';

//<---Leaflet--->//
import {
    Popup,
    useMap,
    Marker,
    TileLayer,
    MapContainer,
    LayersControl
} from 'react-leaflet';

//styles
import 'leaflet/dist/leaflet.css';
import SelectorIcon from '../../../assets/map/selector-icon.js';

//<--- Material--->//
import {
    Box,
    Grid,
    Typography,
    IconButton
} from '@material-ui/core';

//styles
import mapStyles from './map-material-styles';

//icons 
import MoreVertIcon from '@material-ui/icons/MoreVert';

//Components 
import MenuItems from './menu-items/menu-items';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const MapFocused = ({ weather }) => {
    const map = useMap();
    useEffect(() => {
        const [lat, lon] = weather.coordinates;
        map.flyTo([lat, lon]);
    }, [weather.coordinates])
    return null
};

const Map = () => {

    const dispatch = useDispatch();

    const classes = mapStyles();

    const weather = useSelector((state) => state);

    const [menu, setMenu] = useState(null);

    const handleClick = event => {
        setMenu(event.currentTarget);
    };

    const handleClose = (lat, lon, name) => {
        dispatch(getForecast(lat, lon, name));
        setMenu(null);
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.titleBox}>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <Typography className={classes.title}>
                            {weather.nameLocation}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton 
                            className={classes.icon} 
                            aria-controls="simple-menu" 
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
            <MenuItems
                menu={menu}
                handleClose={handleClose}
                options={weather.favoriteLocations}
            />
            <MapContainer center={[weather.coordinates[0], weather.coordinates[1]]} zoom={5} scrollWheelZoom={false} style={{ height: '75vh', width: '90%', border: '3px black solid' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapFocused weather={weather} />
                <Marker position={[weather.coordinates[0], weather.coordinates[1]]} icon={SelectorIcon}>
                    <Popup>
                        <Typography>
                            {weather.nameLocation}
                        </Typography>
                    </Popup>
                </Marker>
                <LayersControl position='topright'>
                    <LayersControl.Overlay name='Precipitación'>
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                        />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name='Nubes'>
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                        />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name='Nivel de presion'>
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                        />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name='Velocidad del viento'>
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                        />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name='Temperatura'>
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                        />
                    </LayersControl.Overlay>
                </LayersControl>
            </MapContainer>
        </Box>
    );
};

export default Map;