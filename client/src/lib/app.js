import React from 'react';
import routes from '../app/config/routes';
import PageJS from 'page';
import state from '../app/config/state';
import Immutable from 'immutable';
import style from './app.scss';
import initialize from '../app/config/initialize';

class AppComponent extends React.Component {
    constructor(){
        super();
        App.state = state;
        this.state = App.state;
    }
    componentWillMount(){
        let com = this;
        App.setState = function(cb){
            return new Promise((resolve, reject)=>{
                cb(App.state);
                com.setState(App.state, ()=>{
                    resolve(App.state)
                });
            })
        }
        App.navigate = PageJS;
        Object.keys(routes).forEach((route)=>{
            PageJS(route, function(info){
                App.setState((state)=>{
                    state.page = routes[route];
                    state.route = route;
                    state.routeInfo = info;
                })
            })
        })
        App.initialize = initialize;
        App.initialize()
        PageJS({hashbang: true});
    }
    
    render(){
        let loading = !this.state.initialized || <div>Initializing</div>
        return (
            <div id={style.appMain}>
                {
                    this.state.initialized ?
                        React.createElement(this.state.page, this.state)
                    : 
                        loading
                }
            </div>
        )
    }
}

export default AppComponent;