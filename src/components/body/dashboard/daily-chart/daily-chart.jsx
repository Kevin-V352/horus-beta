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

        if(!timeZone) return alert('ya sabes');

        currentHour = parseInt(new Date().toLocaleTimeString('en-GB', { timeZone: timeZone }).slice(0,2));
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
                        label: 'hola',
                        data: getTemp(hourlyForecast)
                    }]
                }}
                height={160}
                width={600}
            />
        </Container>
    );
};

export default DailyChart;
