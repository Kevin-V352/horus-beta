//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material styles --->//
const lateralMenuStyles = makeStyles(theme => ({
    root: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240,
        backgroundColor: 'rgba(0, 0, 0, .4)',
    },
    header: {
        height: '10%',
        backgroundColor: '#283747'
    },
    icon: {
        color: 'white'
    },
    textOption: {
        color: 'white',
        fontFamily:'Red Hat Text, sans-serif'
    }

}));

export default lateralMenuStyles;