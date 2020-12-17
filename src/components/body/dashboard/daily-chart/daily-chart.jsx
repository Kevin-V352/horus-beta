import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Container } from '@material-ui/core';

const DailyChart = ({ hourlyForecast, timeZone }) => {

    const getTemp = (arr) => {
        let result = [];
        arr.slice(1, 13).map((hour) => {
            result.push(Math.round(hour.temp));
        })
        return result;

    };

    const getHour = (timeZone) => {
        let currentHour;
        let nextHour;
        let result = [];

        if (!timeZone) return alert('ya sabes');

        currentHour = parseInt(new Date().toLocaleTimeString('en-GB', { timeZone: timeZone }).slice(0, 2));
        for (let i = 0; i < 12; i++) {
            nextHour = new Date().setHours(currentHour + (i + 1));
            result.push(new Date(nextHour).getHours().toString() + ':00');
        };
        return result;
    };

    return (
        <Container style={{ marginTop: '4rem' }}>
            <Line
                data={{
                    labels: getHour(timeZone),
                    datasets: [{
                        label: 'Por horas',
                        data: getTemp(hourlyForecast),
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
                                fontColor: 'white',
                                fontFamily: 'Red Hat Text, sans-serif',
                                fontSize: 13,
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
                                fontColor: 'white',
                                fontFamily: 'Red Hat Text, sans-serif',
                                fontSize: 13,
                            }
                        }],
                    },
                    legend: {
                        labels: {
                            fontColor: 'white',
                            fontFamily: 'Red Hat Text, sans-serif',
                            fontSize: 20
                        },
                    },
                }}
            />
        </Container>
    );
};

export default DailyChart;
