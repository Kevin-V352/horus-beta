//<---React--->//
import React from 'react';

//<--- Redux--->//
import { useSelector } from 'react-redux';

//<--- Material--->//
import {
    Box,
    Grid
} from '@material-ui/core';

//styles
import favoriteListStyles from './favorites-list-material-styles';

//<--- Components --->//
import CardLocation from './card-location/card-location';

const FavoriteList = () => {

    const favorites = useSelector((state) => state.favoriteLocations);

    const classes = favoriteListStyles();

    return (
        <Box className={classes.root}>
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