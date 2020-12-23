//<---React--->//
import React, { useState, useEffect, useRef } from 'react';

//<--- Redux--->//
import { useSelector } from 'react-redux';

//<---Leaflet--->//
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';

//styles
import 'leaflet/dist/leaflet.css';

//<--- Material--->//
import { Box } from '@material-ui/core';

//styles
import mapStyles from './map-material-styles';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

/* const MapFocused = () => {
    const map = useMap(() => {
        map.setView(['40.4167047', '-3.7035825']);
    }); 
    return null
}; */

const Map = () => {
    const classes = mapStyles();

    const weather = useSelector((state) => state);
    const [coordinates, setCoordinates] = useState([]);

    const handlerUpdate = () => {
        setCoordinates({
            lat: weather.coordinates[0],
            lon: weather.coordinates[1]
        })
        console.log('SOY LA FUNCION', coordinates)
    };

    useEffect(() => {
        console.log('EL USEE', weather.coordinates)
        handlerUpdate()

    },[weather.coordinates]);

    if(!coordinates.lat) return ( <div>hola</div>)

    return (
        <Box className={classes.root}>
            <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={11} scrollWheelZoom={false} style={{ height: '85vh', width: '90%', border: '3px black solid' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
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
    )
}

export default Map;