//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const lateralMenuStyles = makeStyles(theme => ({
    root: {
        flexShrink: 0,
    },
    drawerPaper: {
        width: '13vw',
        backgroundColor: theme.palette.primary.main,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden'
    },
    drawerPaperContent: {
        width: 70,
        backgroundColor: theme.palette.primary.main,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden'
    },
    header: {
        height: '10%',
    },
    icon: {
        marginLeft: '10%',
        color: theme.palette.text.primary
    },
    textOption: {
        color: theme.palette.text.primary
    }

}));

export default lateralMenuStyles;