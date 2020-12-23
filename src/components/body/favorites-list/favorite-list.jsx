//<---React--->//
import React from 'react';

//<--- Redux--->//
import { useSelector, useDispatch } from 'react-redux';

//<--- Material--->//
import {
    Box,
    Grid
} from '@material-ui/core';

//<--- Components --->//
import CardLocation from './card-location/card-location';

const FavoriteList = () => {

    const favorites = useSelector((state) => state.favoriteLocations);

    return (
        <Box style={{marginTop: '5rem', marginLeft: '6vw', marginRight: '.8vw',}}>
            <Grid container>           
                    {
                        favorites.map((favorite, index) => (
                            <Grid item xs={4} key={index}>
                                <CardLocation
                                    name={favorite.name}
                                    lat={favorite.lat}
                                    lon={favorite.lon}
                                />
                            </Grid>
                        ))   
                    }    
            </Grid>
        </Box>
    );
};

export default FavoriteList;