import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { Header } from '../common';
import { 
    Home,
    Map
} from '../pages/';

class AppRouter extends Component { 
    render () {
        let routes = (
            <Switch>                
                <Route path='/map' component={Map} />
                <Route path='/' component={Home} exact={true} />
            </Switch>
        );
        //}
  
        return (
            <BrowserRouter>
                <Fragment>
                    {routes}
                    {/* <Footer /> */}
                </Fragment>
            </BrowserRouter>
        );
    }
}


export default AppRouter