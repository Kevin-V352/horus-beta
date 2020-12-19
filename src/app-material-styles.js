//<--- Material dependecies --->//
import { makeStyles } from '@material-ui/core';

//<--- Material styles --->//
const appStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(https://i.imgur.com/GY8Rg8f.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    }
}));

export default appStyles;