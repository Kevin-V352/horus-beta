//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

const historicalChartStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper, 
        borderRadius: 5, 
        paddingTop: '1rem',
    },
    skeleton: {
        width: '100%',
        height: '51vh',
        transform: 'none', 
        /* marginBottom: '1vh' */
    }
}));

export default historicalChartStyles;