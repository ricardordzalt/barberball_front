import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import GalleryPage from './Pages/GalleryPage';
import LayoutContainer from './Containers/LayoutContainer';

const Routes = () => {
    return(
        <HashRouter>
            <Switch>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                <LayoutContainer>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/gallery" component={GalleryPage}/>
                </LayoutContainer>
            </Switch>
        </HashRouter>
    );
};

export default Routes;