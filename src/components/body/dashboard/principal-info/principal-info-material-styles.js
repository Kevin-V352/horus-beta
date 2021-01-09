//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const PrincipalInfoStyles = makeStyles(theme => ({

    root: {
        minWidth: '50%',
        backgroundColor: theme.palette.background.paper,
        marginTop: '1%',
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
        fontSize: '120%',
        textAlign: 'center', 
        marginBottom: 0,
    },
    currentTemp: {
        color: theme.palette.text.primary,
        fontSize: '250%',
        textAlign: 'center', 
    },
    description: {
        color: theme.palette.text.primary,
        marginBottom: '.5vh',
        textAlign: 'center',
        fontSize: '130%'
    },
    infoItems: {
        color: theme.palette.text.primary,
        textAlign: 'center'
    },
    icon: {
        color: theme.palette.text.primary,
        fontSize: '150%'
    },
    button: {
        paddingTop: 0,
        paddingLeft: 0
    }
}));

export default PrincipalInfoStyles;