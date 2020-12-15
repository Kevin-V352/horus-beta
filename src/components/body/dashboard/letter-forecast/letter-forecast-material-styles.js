//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const letterForecastStyles = makeStyles(theme => ({
    root: {
        justifyContent: 'space-around'
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'rgba(0, 0, 0, .3)',
    },
    date: {
        color: 'white',
        fontSize: '120%',
        fontFamily: 'Red Hat Text, sans-serif',
    },
    tempBox: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'Red Hat Text, sans-serif',
    },
    tempMax: {
        color: 'white',
        fontSize: '200%',
        fontFamily: 'Red Hat Text, sans-serif',
    },
    tempMin: {
        color: 'grey',
        fontSize: '180%',
        fontFamily: 'Red Hat Text, sans-serif',
    },
    description: {
        color: 'white',
        fontFamily: 'Red Hat Text, sans-serif',
    }

}));

export default letterForecastStyles;