//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const letterForecastStyles = makeStyles(theme => ({
    root: {
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0, 0, 0, .65)',
        padding: '1%',
        borderRadius: 5
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
        color: theme.palette.text.primary,
        fontSize: '140%',
        textAlign: 'center'
    },
    tempBox: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    tempMax: {
        color: theme.palette.text.primary,
        fontSize: '220%',
    },
    tempMin: {
        color: theme.palette.text.secondary,
        fontSize: '190%',
    },
    description: {
        color: theme.palette.text.primary,
        textAlign: 'center'
    },
    imageIcon: {
        height: '100%'
    },
    iconRoot: {
        textAlign: 'center'
    }

}));

export default letterForecastStyles;