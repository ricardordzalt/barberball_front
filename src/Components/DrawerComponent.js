import React, { useState } from 'react';
import ListsComponent from './ListsComponent';
import MediaLinksComponent from './MediaLinksComponent';
import LocationModalComponent from './LocationModalComponent';
import { makeStyles, Drawer, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240
    },
    toolbar: { ...theme.mixins.toolbar, 
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    }
}));

const DrawerComponent = props => {
    const classes = useStyles();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalLocation = () => {
        setIsModalOpen(!isModalOpen);
    };

    return(
        <Drawer 
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper
            }}
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
            <MediaLinksComponent onClickRoomIcon={() => handleModalLocation()} />
            <LocationModalComponent open={isModalOpen} onClose={() => handleModalLocation()} onClickIcon={() => handleModalLocation()}/>
            <Divider/>
            <ListsComponent onClickHome={props.onClickHome} onClickAbout={props.onClickAbout} onClickGallery={props.onClickGallery}/>
        </Drawer>
    );
};

export default DrawerComponent;