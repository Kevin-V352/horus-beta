import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#242835'
        },
        text: {
            primary: '#F1F6F9',
            secondary: '#9BA4B4'
        },
        background: {
            paper: 'rgba(0, 0, 0, .65)'
        }
    },
    typography: {
        fontFamily: 'Red Hat Text, sans-serif'
    }
});

export default theme;