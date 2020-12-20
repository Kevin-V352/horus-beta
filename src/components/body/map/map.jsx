//<---React--->//
import React from 'react';

//<---Leaflet--->//
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';

//styles
import 'leaflet/dist/leaflet.css';

//<--- Material--->//
import { Box } from '@material-ui/core';

//styles
import mapStyles from './map-material-styles';


const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY

const Map = () => {

    const classes = mapStyles();

    return (
        <Box className={classes.root}>
            <MapContainer center={[-32.7434258, -60.7496742]} zoom={11} scrollWheelZoom={false} style={{ height: '85vh', width: '90%', border: '3px black solid' }}>
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