//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core/styles';

//<--- Material dependecies --->//
const searchUseStyles = makeStyles(theme => ({
    
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    list: {
        padding: 0,
        zIndex: theme.zIndex.appBar + 1,
        position: 'absolute',
        backgroundColor: theme.palette.primary.main,
        borderRadius: 5,
        marginTop: '3vh'
    },
    selected: {
        overflow: 'hidden',
        backgroundColor: 'red'
    },
    icon: {
        color: theme.palette.text.primary
    },
}))

export default searchUseStyles;