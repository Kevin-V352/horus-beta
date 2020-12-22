//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const PrincipalInfoStyles = makeStyles(theme => ({

    root: {
        minWidth: '44%',
        backgroundColor: 'rgba(0, 0, 0, .65)',
        margin: '2%'
    },
    cardContent: {
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: theme.palette.text.primary,
        fontSize: '140%', 
    },
    currentTemp: {
        color: theme.palette.text.primary,
        fontSize: '400%',
        textAlign: 'center', 
    },
    description: {
        color: theme.palette.text.primary,
        marginBottom: 12,
        textAlign: 'center',
        fontSize: '130%',
    },
    infoItems: {
        color: theme.palette.text.primary,
        textAlign: 'center'
    }
}));

export default PrincipalInfoStyles;