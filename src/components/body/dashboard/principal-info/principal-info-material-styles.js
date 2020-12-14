//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const PrincipalInfoStyles = makeStyles({

    root: {
        minWidth: '40%',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        display: 'flex',
        justifyContent: 'center',
        justifySelf: 'center',
        
    },
    title: {
        fontFamily: 'Red Hat Text, sans-serif',
        fontSize: '140%',
    },
    currentTemp: {
        fontFamily: 'Red Hat Text, sans-serif',
        fontSize: '300%',
        textAlign: 'center'
    },
    pos: {
        fontFamily: 'Red Hat Text, sans-serif',
        marginBottom: 12,
    },
});

export default PrincipalInfoStyles;