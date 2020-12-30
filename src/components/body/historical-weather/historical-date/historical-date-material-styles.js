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
    nameLocation: {
        fontSize: '120%',
        textAlign: 'center'
    },
    date: {
        fontSize: '175%',
        textAlign: 'center'
    },
    gridContainer: {
        maxWidth: '40%'
    },
    temp: {
        textAlign: 'center'
    },
    dateSkeleton: {
        height: '6.9vh'
    },
    tempSkeleton: {
        width: '100%'
    }
}));

export default histoicalDateStyles;