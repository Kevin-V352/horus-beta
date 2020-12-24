//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const dashboardStyles = makeStyles(theme => ({
    root: {
        marginLeft: '6vw',
        marginRight: '.8vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '9vh'
    }
}));

export default dashboardStyles;
