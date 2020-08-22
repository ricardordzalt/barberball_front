import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import GalleryPage from './Pages/GalleryPage';
import LayoutContainer from './Containers/LayoutContainer';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <LayoutContainer>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/gallery" component={GalleryPage}/>
                </LayoutContainer>
            </Switch>
        </Router>
    );
};

export default Routes;