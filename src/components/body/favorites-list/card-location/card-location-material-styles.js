//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const cardLocationStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        color: theme.palette.text.primary,
        fontSize: '120%',
        textAlign: 'center',
        minHeight: '9vh'
    },
    temp: {
        color: theme.palette.text.primary,
        fontSize: '200%',
        textAlign: 'center'
    },
    description: {
        color: theme.palette.text.primary,
        fontSize: '130',
        textAlign: 'center'
    },
    icon: {
        color: theme.palette.text.secondary,
        zIndex: 3,
        '&:hover' : {
            color: theme.palette.text.primary
        }
    },
    button: {
        padding: 0,
        zIndex: 1,
        position: 'absolute'
        
    },
    skeletonIcon: {
        width: '100%',
        height: '11.8vh'
    }

}));

export default cardLocationStyles;