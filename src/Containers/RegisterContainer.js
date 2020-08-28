import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../Components/SessionForm';
import { Typography, Button, makeStyles, TextField } from '@material-ui/core';

const useStyles= makeStyles(theme => ({
    titleRegister: {
        margin: '15px 0px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        margin: '5px 15px'
    },
    buttonForm: {
        margin: '30px 15px 10px 15px'
    },
    linkButton: {
        color: 'inherit',
        fontSize: 12
    }
}));

const RegisterContainer = () => {
    const classes = useStyles();

    const responseGoogle = response => {
        console.log('google response is:', response);
    };
    return (
        <SessionForm>
            <Typography className={classes.titleRegister} variant='h5'>Registro de Usuario</Typography>
            <form className={classes.form} noValidate autoComplete='off'>
                <TextField className={classes.textField} label='Nombre de Usuario' />
                <TextField className={classes.textField} label='Correo Electrónico' />
                <TextField className={classes.textField} type='password' label='Contraseña' />
                <TextField className={classes.textField} type='password' label='Confirma tu Contraseña' />
                <Button className={classes.buttonForm} variant='contained' color='secondary'>Registrarse</Button>
                <Link className={classes.linkButton} to='/login'>¿Ya tienes cuenta? Inicia sesión aquí.</Link>
            </form>
        </SessionForm>
    );
};

export default RegisterContainer;