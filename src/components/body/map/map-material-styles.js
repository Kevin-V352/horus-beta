//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const mapStyles = makeStyles(theme => ({
    root: {
        marginLeft: '6vw',
        marginRight: '.8vw',
        paddingTop: '12vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '88vh',
        /* [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
            minHeight: 48,
        },
        [breakpoints.up('sm')]: {
            minHeight: 64,
        }, */
    },
    titleBox: {
        backgroundColor: theme.palette.background.paper,
        marginBottom: '1vh',
        height: '10vh',
        width: '90%',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        color: theme.palette.text.primary,
        fontSize: '200%',
        textAlign: 'center',
        verticalAlign: 'center'
    },
    icon: {
        color: theme.palette.text.primary
    }
}));

export default mapStyles;