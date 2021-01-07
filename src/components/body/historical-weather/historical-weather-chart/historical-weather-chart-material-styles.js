//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

const historicalChartStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        marginTop: 0,
        backgroundColor: theme.palette.background.paper,
        cursor: 'pointer'
    },
    content: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

export default historicalChartStyles;