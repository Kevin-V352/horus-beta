//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

const historicalChartStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        backgroundColor: 'rgba(0, 0, 0, .65)',
        cursor: 'pointer'
    },
    content: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

export default historicalChartStyles;