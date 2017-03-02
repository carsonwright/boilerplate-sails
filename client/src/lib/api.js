import jQuery from 'jquery';
import Api from '../app/config/api';
window.$ = jQuery;

Api.connection = io.sails.connect('http://localhost:1337');
Api.request = function(options){
    var promise = $.Deferred();
    this.connection.request(options, function(response){
        promise.resolve(response);
    })

    return promise;
}
Api.get = function(url, params){
    var options = {
        method: "get",
        url: url,
        data: params
    }
    return this.request(options);
}
Api.post = function(url, params){
    var options = {
        method: "post",
        url: url,
        data: params
    }
    return this.request(options);
}
Api.put = function(url, params){
    var options = {
        method: "put",
        url: url,
        data: params
    }
    return this.request(options);
}
Api.delete = function(url, params){
    var options = {
        method: "delete",
        url: url,
        data: params
    }
    return this.request(options);
}

if(typeof module != "undefined"){
    module.exports = Api;
}