//<---React--->//
import React from 'react';

//<--- Redux--->//
import { useSelector } from 'react-redux';

//<---Chart--->//
import { Line } from 'react-chartjs-2';

//<---Material--->//
import { Container } from '@material-ui/core';

const DailyChart = () => {

    const weather = useSelector((state) => state);
    
    const fontFamily = 'Red Hat Text, sans-serif';
    const fontSize = 13;
    const color = 'white';

    const getTemp = arr => {
        let result = [];
        arr.slice(1, 13).map((hour) => {
            result.push(Math.round(hour.temp));
        });
        return result;

    };

    const getHour = timeZone => {
        let currentHour, nextHour;
        let result = [];

        if (!timeZone) return

        currentHour = parseInt(new Date().toLocaleTimeString('en-GB', { timeZone: timeZone }).slice(0, 2));
        for (let i = 0; i < 12; i++) {
            nextHour = new Date().setHours(currentHour + (i + 1));
            result.push(new Date(nextHour).getHours().toString() + ':00');
        };
        return result;
    };

    return (
        <Container style={{ margin: '.5rem', backgroundColor: 'rgba(0, 0, 0, .65)', borderRadius: 5, paddingTop: '1rem' }}>
            <Line
                data={{
                    labels: getHour(weather.timeZone),
                    datasets: [{
                        label: 'Temperatura por horas',
                        data: getTemp(weather.hourly),
                        borderWidth: 3,
                        backgroundColor: 'rgba( 46, 134, 193, .4)',
                        borderColor: 'rgba( 46, 134, 193)',
                        pointBackgroundColor: 'rgba( 46, 134, 193)',
                        pointStyle: 'circle',
                        radius: 4,
                        lineTension: 0,
                    }],
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
        </Container>
    );
};

export default DailyChart;
