//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const historicalWeatherStyles = makeStyles(theme => ({
    root: {
        paddingTop: '4.5rem',
        marginLeft: '6vw', 
        marginRight: '.8vw', 
        height: '100vh'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

export default historicalWeatherStyles;