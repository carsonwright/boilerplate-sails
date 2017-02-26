import React from 'react';
import routes from './config/routes';
import PageJS from 'page';
import state from './config/state';

class Page extends React.Component {
    constructor(){
        super();
        App.state = state;
        this.state = App.state;
    }
    componentWillMount(){
        let com = this;
        App.refresh = function(){
            com.setState(App.state);
        }

        Object.keys(routes).forEach((route)=>{
            PageJS(route, function(info){
                App.state.page = routes[route];
                App.state.route = route;
                App.state.routeInfo = info;
                App.refresh()
            })
        })
        PageJS({hashbang: true});
    }
    
    render(){
        let defaultComponent = <div></div>
        return React.createElement(App.state.page || defaultComponent, App.state);
    }
}

export default Page;