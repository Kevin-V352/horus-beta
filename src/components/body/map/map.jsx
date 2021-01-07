//<---React--->//
import React, { useEffect } from 'react';

//<--- Redux--->//
import { useSelector } from 'react-redux';

//<---Leaflet--->//
import { 
    MapContainer, 
    TileLayer, 
    LayersControl,
    Marker, 
    Popup,
    useMap 
} from 'react-leaflet';

//styles
import 'leaflet/dist/leaflet.css';
import SelectorIcon from '../../../assets/map/selector-icon.js';

//<--- Material--->//
import { Box, Typography } from '@material-ui/core';

//styles
import mapStyles from './map-material-styles';

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

    const classes = mapStyles();

    const weather = useSelector((state) => state);

    return (
        <Box className={classes.root}>
            <MapContainer center={[weather.coordinates[0], weather.coordinates[1]]} zoom={5} scrollWheelZoom={false} style={{ height: '75vh', width: '90%', border: '3px black solid' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapFocused weather={weather}/>
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