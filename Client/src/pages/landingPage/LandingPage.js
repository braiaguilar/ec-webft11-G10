import React from 'react';
import { useStyles } from '../../pages/landingPage/styleLanding';
import { CssBaseline } from '@material-ui/core';
import LogIn from '../../components/login/LogIn'

function PageLogIn(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <LogIn/>
        </div>
    );
}

export default PageLogIn;