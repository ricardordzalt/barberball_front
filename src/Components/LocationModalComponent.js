import React from 'react';
import MyMapComponent from './MyMapComponent';
import { Modal, makeStyles, Box, IconButton, Typography } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    modalContent: {
        position: 'absolute',
        width: '75%',
        height: '85%',
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.primary.main}`,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
        outline: 0
    }
}));

const LocationModalComponent = props => {
    const classes = useStyles();

    return(
        <Modal
            className={classes.locationModal}
            open={props.open}
            onClose={props.onClose}
            >
            <div className={classes.modalContent}>
                <Box display='flex' justifyContent="space-between">
                    <Box>
                        <Typography color='primary' variant='h6'>Nuestra Ubicación</Typography>
                    </Box>
                    <Box>
                        <IconButton color='secondary' onClick={props.onClickIcon}>
                            <CloseIcon fontSize='small'/>
                        </IconButton>
                    </Box>
                </Box>
                <Box justifyContent='center'>
                    <Box>
                        <MyMapComponent/>
                    </Box>
                </Box>
            </div>
        </Modal>
    );
};

export default LocationModalComponent;