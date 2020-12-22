//<---React--->//
import React, { useState } from 'react';

//<--- Material--->//
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

//styles
import headerStyles from './header-material-styles';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

//<--- Components --->//
import SearchBar from './search-bar/search-bar';
import LateralMenu from './lateral-menu/lateral-menu';


const Header = () => {

    const classes = headerStyles();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classes.root}>
            <AppBar 
                position='fixed'
                className={classes.appBar}
                color='primary'
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setIsOpen(!isOpen)}
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
            <LateralMenu isOpen={isOpen} closeDrawer={setIsOpen}/>
        </div>
    );
}

export default Header;