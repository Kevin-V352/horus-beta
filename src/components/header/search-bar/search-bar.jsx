import React from 'react';

//<--- Material dependecies --->//
import { InputBase } from '@material-ui/core';

//<--- Material styles --->//
import searchUseStyles from './search-bar-material-styles';


const SearchBar = () => {

    const classes = searchUseStyles();

    return (
        <InputBase
            onChange={e => console.log(e.target.value)}
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
        />
    );
};

export default SearchBar;