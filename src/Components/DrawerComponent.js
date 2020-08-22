import React from 'react';
import ListsComponent from './ListsComponent';
import { makeStyles, Drawer, Divider, Box, IconButton } from '@material-ui/core';
import { Facebook as FacebookIcon, WhatsApp as WhatsAppIcon, Instagram as InstragramIcon } from '@material-ui/icons';

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
            <Box className={classes.toolbar}>
                <IconButton color='primary' href='https://www.facebook.com/barber.mochis' target='_blank'>
                    <FacebookIcon fontSize='small'/>
                </IconButton>
                <IconButton color='primary' href='https://wa.me/526683967192' target='_blank'>
                    <WhatsAppIcon fontSize='small'/>
                </IconButton>
                <IconButton color='primary' href='https://www.instagram.com/barberball_lm' target='_blank'>
                    <InstragramIcon fontSize='small'/>
                </IconButton>
            </Box>
            <Divider/>
            <ListsComponent/>
        </Drawer>
    );
};

export default DrawerComponent;