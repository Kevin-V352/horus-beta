//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

const histoicalDateStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .65)',
        marginBottom: '1vh',
    },
    content: {
        display: 'flex',
        justifyContent: 'center'   
    },
    date: {
        fontSize: '150%',
        textAlign: 'center'
    },
    gridContainer: {
        maxWidth: '40%'
    },
    temp: {
        textAlign: 'center'
    }
}));

export default histoicalDateStyles;