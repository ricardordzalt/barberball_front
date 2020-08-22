import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon, AccountCircle as AccountCircleIcon, SportsBaseball as SportsBaseballIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    title: {
        flexGrow: 1,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.8rem'
        }
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - 240px)`,
            marginLeft: 240
        }
    }
}));

const NavBarComponent = props => {
    const classes = useStyles();

    const [auth, setAuth] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChangeMenu = event => {
        setAnchorEl(event.currentTarget);
        setIsOpen(!isOpen);
    };

    const handleProfileItem = () => {
        console.log('Perfil')
    };

    const handleLogoutItem = () => {
        console.log('Cerrar Sesión');
        setAuth(false);
    };

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge='end' color='inherit' aria-label='menu' className={classes.menuButton} onClick={props.onClickMenu}>
                    <MenuIcon fontSize='large'/>
                </IconButton>
                <Typography variant='h4' className={classes.title}>
                    <SportsBaseballIcon/>
                    Barber Ball
                    <SportsBaseballIcon/>
                </Typography>
                {auth && (
                    <div>
                        <IconButton edge='end' color='inherit' aria-label='account' onClick={e => handleChangeMenu(e)}>
                            <AccountCircleIcon fontSize='large'/>
                        </IconButton>
                        <Menu
                            open={isOpen}
                            anchorEl={anchorEl}
                            onClose={e => handleChangeMenu(e)}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={() => handleProfileItem()}>Mi Perfil</MenuItem>
                            <MenuItem onClick={() => handleLogoutItem()}>Cerrar Sesión</MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBarComponent;