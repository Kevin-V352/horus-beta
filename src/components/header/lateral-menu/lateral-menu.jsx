//<---React--->//
import React from 'react';

//<--- Material--->//
import { 
    Drawer,
    Divider, 
    ListItem, 
    ListItemIcon,
    ListItemText 
} from '@material-ui/core';

//styles
import lateralMenuStyles from './lateral-menu-marterial-styles';

//Icons
import BookmarkIcon from '@material-ui/icons/Bookmark';
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import TimelineIcon from '@material-ui/icons/Timeline';
import CodeIcon from '@material-ui/icons/Code';

const LateralMenu = ({ isOpen, closeDrawer }) => {

    const classes = lateralMenuStyles();

    return (
        <Drawer
            className={classes.root}
            variant='temporary'
            classes={{
                paper: classes.drawerPaper
            }}
            anchor='left'
            open={isOpen}
            onClose={() => closeDrawer(false)}
        >
            <ListItem 
                className={classes.header}  
                onClick={() => closeDrawer(false)}>
                <ListItemIcon>
                    <HomeIcon className={classes.icon}/>
                </ListItemIcon>
                <ListItemText className={classes.textOption}>
                    Inicio
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon className={classes.icon}/>
                </ListItemIcon>
                <ListItemText className={classes.textOption}>
                    Inicio
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <BookmarkIcon className={classes.icon}/>
                </ListItemIcon>
                <ListItemText className={classes.textOption}>
                    Favoritos
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <MapIcon className={classes.icon}/>
                </ListItemIcon>
                <ListItemText className={classes.textOption}>
                    Mapa
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <TimelineIcon className={classes.icon}/>
                </ListItemIcon>
                <ListItemText className={classes.textOption}>
                    Historial
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <CodeIcon className={classes.icon}/>
                </ListItemIcon>
                <ListItemText className={classes.textOption}>
                    Créditos
                </ListItemText>
            </ListItem>
        </Drawer>
    );
};

export default LateralMenu;