//<---React--->//
import React from 'react';

//<---Routing--->//
import { NavLink } from 'react-router-dom';

//<--- Material--->//
import {
    Drawer,
    Divider,
    List,
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

//<---CSS-styles--->//
import styles from './lateral-menu.module.css';

const LateralMenu = ({ isOpen, closeDrawer }) => {

    const classes = lateralMenuStyles();

    return (
        <Drawer
            className={classes.root}
            variant='permanent'
            classes={{
                paper: isOpen ? classes.drawerPaper : classes.drawerPaperContent
            }}
            anchor='left'
            open={isOpen}
            onClose={() => closeDrawer(false)}
        >
            <List style={{ marginTop: '4rem' }}>
                <NavLink to='/Dashboard' className={styles.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText className={classes.textOption}>
                            Inicio
                        </ListItemText>
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to='/FavoriteList' className={styles.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <BookmarkIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText className={classes.textOption}>
                            Favoritos
                        </ListItemText>
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to='/Map' className={styles.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <MapIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText className={classes.textOption}>
                            Mapa
                        </ListItemText>
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to='/HistoricalWeather' className={styles.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <TimelineIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText className={classes.textOption}>
                            Historial
                    </ListItemText>
                    </ListItem>
                </NavLink>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <CodeIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText className={classes.textOption}>
                        Créditos
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default LateralMenu;