import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OrfanatosMapas from './pages/OrfanatosMapas';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrfanatosMapas} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;