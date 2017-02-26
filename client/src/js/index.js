import Api from './api';
import AppComponent from './react/config/app';
import ReactDOM from 'react-dom';
import React from 'react';
console.logBlock = function(name, value){
    console.log("===========================================")
    console.log(name);
    console.log(value);
    console.log("-------------------------------------------")
    
}
if(typeof window != "undefined"){
    window.Api = Api;
}

window.App = class App {
    static start (){
        this.container = document.getElementById("app");
        ReactDOM.render(<AppComponent />, this.container);
    }
}