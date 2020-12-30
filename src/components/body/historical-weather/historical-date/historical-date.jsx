//<---React--->//
import React from 'react';

//<--- Material--->//
import Skeleton from '@material-ui/lab/Skeleton';
import {
    Card,
    CardContent,
    CardActionArea,
    Typography,
    IconButton,
    Grid,
} from '@material-ui/core';

//styles 
import histoicalDateStyles from './historical-date-material-styles';

const HistoricalDate = ({ date }) => {

    const classes = histoicalDateStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={12}>
                        <Typography className={classes.date}>
                            {date.date}
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography className={classes.temp}>
                                Temperatura máxima: {date.maxTemp} °C
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.temp}>
                                Temperatura mínima: {date.minTemp} °C
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default HistoricalDate;