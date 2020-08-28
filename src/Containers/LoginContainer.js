import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SessionForm from '../Components/SessionForm';
import { Typography, Button, makeStyles, TextField } from '@material-ui/core';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../Configs/api_keys';
import PATH from '../Configs/api_path';

const useStyles = makeStyles(theme => ({
    googleButton: {
        margin: '25px 10px'
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

const LoginContainer = () => {
    const classes = useStyles();

    const responseGoogle = async response => {
        if(response.error){
            console.log('login response is:', response.error);
        }else {
            const payload = { idToken: response.getAuthResponse().id_token };
            try{
                const response = await axios.post(`${PATH}/login/google`, payload);
                console.log('response', response.data);
            }catch(err) {
                console.log('err', err.response.data);
            };
        };
    };

    const logout = response => {
        console.log('logout response is:', response);
    };

    return (
        <SessionForm>
            <Typography variant='h5'>Iniciar Sesión</Typography>
            <GoogleLogin
                className={classes.googleButton}
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Iniciar Sesión con Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            {/* <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={logout}
            >
            </GoogleLogout> */}
            <form className={classes.form} noValidate autoComplete='off'>
                <TextField className={classes.textField} label='Correo Electrónico' />
                <TextField className={classes.textField} type='password' label='Contraseña' />
                <Button className={classes.buttonForm} variant='contained' color='secondary'>Iniciar Sesión</Button>
                <Link className={classes.linkButton} to='/register'>¿No tienes cuenta? Regístrate aquí.</Link>
            </form>
        </SessionForm>
    );
};

export default LoginContainer;