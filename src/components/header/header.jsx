import React from 'react';

//<--- Material--->//

//dependencies
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

//styles
import headerStyles from './header-material-styles';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

//<--- Components --->//
import SearchBar from './search-bar/search-bar';


const Header = () => {

    const classes = headerStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => console.log('ira')}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Horus
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <SearchBar />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;