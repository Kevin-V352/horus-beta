//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const letterForecastStyles = makeStyles(theme => ({
    root: {
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        margin: '9px',
        maxWidth: '14vw',
        borderRadius: '5px'

    },
    date: {
        color: theme.palette.text.primary,
        fontSize: '140%',
        textAlign: 'center'
    },
    tempBox: {
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        maxWidth: '1rem'
    },
    tempMax: {
        color: theme.palette.text.primary,
        fontSize: '200%',
    },
    tempMin: {
        color: theme.palette.text.secondary,
        fontSize: '110%',
    },
    description: {
        color: theme.palette.text.primary,
        textAlign: 'center'
    },
    imageIcon: {
        height: '100%',
        width: 'minWidth'
    },
    iconRoot: {
        textAlign: 'center'
    }

}));

export default letterForecastStyles;