//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

const historicalChartStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .65)', 
        borderRadius: 5, 
        paddingTop: '1rem',
        paddingBottom: '1rem'
    },
    skeleton: {
        width: '100%',
        height: '46vh',
        transform: 'none',
        
    }
}));

export default historicalChartStyles;