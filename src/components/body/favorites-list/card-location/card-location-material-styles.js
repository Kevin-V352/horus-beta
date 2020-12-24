//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const cardLocationStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        backgroundColor: 'rgba(0, 0, 0, .65)',
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
        color: theme.palette.text.secondary
    },
    button: {
        padding: 0
    }

}));

export default cardLocationStyles;