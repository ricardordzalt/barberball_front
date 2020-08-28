import React from 'react';
import { makeStyles, Box, IconButton, Divider } from '@material-ui/core';
import { Facebook as FacebookIcon, WhatsApp as WhatsAppIcon, Instagram as InstragramIcon, Room as RoomIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    toolbar: { ...theme.mixins.toolbar, 
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center'
    }
}));

const MediaLinksComponent = props => {
    const classes = useStyles();

    return(
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
            <Divider orientation="vertical" flexItem/>
            <IconButton color='primary' onClick={props.onClickRoomIcon}>
                <RoomIcon fontSize='small'/>
            </IconButton>
        </Box>
    );
};

export default MediaLinksComponent;