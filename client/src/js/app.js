import React from 'react';
import routes from './react/config/routes';
import PageJS from 'page';
import state from './react/config/state';
import extend from './extend';

class App extends React.Component {
    constructor(){
        super();
        App.state = state;
        this.state = App.state;
    }
    componentWillMount(){
        let com = this;
        App.refresh = function(){
            com.setState(extend(App.state));
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
        return React.createElement(this.state.page || defaultComponent, this.state);
    }
}

export default App;