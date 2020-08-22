import React, { useState } from 'react';
import NavBarComponent from '../Components/NavBarComponent';
import DrawerComponent from '../Components/DrawerComponent';

import { makeStyles, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }
}));
const MainContainer = props => {
    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);

    const handleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className={classes.root}>
            <NavBarComponent onClickMenu={() => handleDrawer()}/>
            <Hidden smDown>
                <DrawerComponent variant='permanent' open={true}/>
            </Hidden>
            <Hidden mdUp>
                <DrawerComponent variant='temporary' open={isOpen} onClose={() => handleDrawer()}/>
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                {props.children}
            </div>
        </div>
    );
};

export default MainContainer;