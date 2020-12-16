//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const letterForecastStyles = makeStyles(theme => ({
    root: {
        justifyContent: 'space-around',
    },
    paper: {
        padding: theme.spacing(5),
        color: theme.palette.text.secondary,
        backgroundColor: 'rgba(0, 0, 0, .3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    date: {
        color: 'white',
        fontSize: '140%',
        fontFamily: 'Red Hat Text, sans-serif',
        width: '120%'
    },
    tempBox: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'Red Hat Text, sans-serif',
        width: '5.5rem'
    },
    tempMax: {
        color: 'white',
        fontSize: '220%',
        fontFamily: 'Red Hat Text, sans-serif',
    },
    tempMin: {
        color: 'grey',
        fontSize: '190%',
        fontFamily: 'Red Hat Text, sans-serif',
    },
    description: {
        color: 'white',
        fontFamily: 'Red Hat Text, sans-serif',
    },
    imageIcon: {
        height: '100%'
    },
    iconRoot: {
        textAlign: 'center'
    }

}));

export default letterForecastStyles;