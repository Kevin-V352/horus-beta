//<---React--->//
import React from 'react';

//<---Chart--->//
import { Bar } from 'react-chartjs-2';

//<---Material--->//
import Skeleton from '@material-ui/lab/Skeleton';
import { Box, Container } from '@material-ui/core';

//styles 
import historicalChartStyles from './historical-chart-material-styles';

const HistoricalChart = ({ data }) => {

    const classes = historicalChartStyles();

    const fontFamily = 'Red Hat Text, sans-serif';
    const fontSize = 13;
    const color = 'white';

    return (
        <Container className={classes.root}>
            {
                data.historicalHours ? 

                <Bar
                data={{
                    labels: data.historicalHours,
                    datasets: [{
                        label: 'Registro de temperatura por horas',
                        data: data.historicalTemp,
                        borderWidth: 3,
                        backgroundColor: 'rgba( 46, 134, 193, .4)',
                        borderColor: 'rgba( 46, 134, 193)',
                        pointBackgroundColor: 'rgba( 46, 134, 193)',
                        pointStyle: 'circle',
                        radius: 4,
                        lineTension: 0,
                    }]
                }}
                height={160}
                width={600}
                options={{

                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                fontColor: color,
                                fontFamily: fontFamily,
                                fontSize: fontSize,
                                lineHeight: 4.3,
                                padding: 12,
                                callback: value => value + '°'
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                fontColor: color,
                                fontFamily: fontFamily,
                                fontSize: fontSize,
                            }
                        }],
                    },
                    legend: {
                        labels: {
                            fontColor: color,
                            fontFamily: fontFamily,
                            fontSize: 20
                        },
                    },
                }}
            />

            :
            <Box>
                <Skeleton className={classes.skeleton}/>
                <Box className={classes.space}/>
            </Box>
            }
        </Container>
    );
};

export default HistoricalChart;