//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const PrincipalInfoStyles = makeStyles({

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
        fontFamily: 'Red Hat Text, sans-serif',
        fontSize: '140%',
        color: 'white'
    },
    currentTemp: {
        fontFamily: 'Red Hat Text, sans-serif',
        fontSize: '400%',
        textAlign: 'center',
        color: 'white'
    },
    description: {
        fontFamily: 'Red Hat Text, sans-serif',
        marginBottom: 12,
        textAlign: 'center',
        color: 'white',
        fontSize: '130%',
    },
    infoItems: {
        color: 'white',
        fontFamily: 'Red Hat Text, sans-serif',
        textAlign: 'center'
    }
});

export default PrincipalInfoStyles;