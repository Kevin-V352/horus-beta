import React from 'react';

//<--- Material--->//

//dependencies
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';

//styles
import PrincipalInfoStyles from './principal-info-material-styles';

const PrincipalInfo = ({name, currentTemp, description }) => {
    const classes = PrincipalInfoStyles();

    const changeFormat = (str) => {
        let chars = {
            '/':', ',
            '_': ' '
        };
        return str.replace(/[/_]/g, m => chars[m]);
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {changeFormat(name)}
                </Typography>
                <Typography className={classes.currentTemp} variant="h5" component="h2">
                    {`${currentTemp} °C`}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {description}
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PrincipalInfo;