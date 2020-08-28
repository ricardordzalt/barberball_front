import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';

const useStyles= makeStyles(theme => ({
    backgroundDiv: {
        backgroundColor: theme.palette.primary.dark,
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '100%',
        position: 'absolute',
        margin: 'auto',
        right: 0,
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        margin: '30px'
    },
    paperForm: {
        padding: '25px',
        textAlign: 'center',
    }
}));

const SessionForm = props => {
    const classes = useStyles();

    return(
        <div className={classes.backgroundDiv}>
            <Grid className={classes.formContainer} item xs={12} sm={9} md={5} lg={3}>
                <Paper className={classes.paperForm}>{props.children}</Paper>
            </Grid>
        </div>
    );
};

export default SessionForm;
