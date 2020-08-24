import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Home as HomeIcon, Info as InfoIcon, PhotoLibrary as PhotoLibraryIcon  } from '@material-ui/icons';


const ListsComponent = props => {

    return(
        <div>
            <List component='nav'>
                <ListItem button onClick={props.onClickHome} component={Link} to='/'>
                    <ListItemIcon color='secondary'>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Página Principal'/>
                </ListItem>
                <ListItem button onClick={props.onClickAbout} component={Link} to='/about'>
                    <ListItemIcon>
                        <InfoIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Acerca de'/>
                </ListItem>
                <ListItem button onClick={props.onClickGallery} component={Link} to='/gallery'>
                    <ListItemIcon>
                        <PhotoLibraryIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Galería'/>
                </ListItem>
                <Divider/>
            </List>
        </div>
    );
};

export default ListsComponent;