//<---React--->//
import React from 'react';

//<--- Material--->//
import {
    Menu,
    MenuItem
} from '@material-ui/core';

const MenuItems = ({ menu, handleClose, options }) => {
    return (
        <Menu
            id="simple-menu"
            anchorEl={menu}
            keepMounted
            open={Boolean(menu)}
            onClose={handleClose}
        >
            {
                options.map(option => (
                    <MenuItem onClick={() => handleClose(option.lat, option.lon, option.name)}>{option.name}</MenuItem>
                ))
            }
        </Menu>
    );
};

export default MenuItems;