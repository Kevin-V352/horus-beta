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
    },
    space: {
        height: '1.5vh'
    }
}));

export default historicalChartStyles;