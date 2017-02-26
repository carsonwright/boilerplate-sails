import Api from './api';
import Index from './react/index';
import ReactDOM from 'react-dom';
import React from 'react';

if(typeof window != "undefined"){
    window.Api = Api;
}

window.App = class App {
    static start (){
        this.container = document.getElementById("app");
        ReactDOM.render(<Index />, this.container);
    }
}