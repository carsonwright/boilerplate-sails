import jQuery from 'jquery';
window.$ = jQuery;

var Api  = {
    connection: io.sails.connect('http://localhost:1337'),
    request: function(options){
        var promise = $.Deferred();
        this.connection.request(options, function(response){
            promise.resolve(response);
        })

        return promise;
    },
    get: function(url, params){
        var options = {
            method: "get",
            url: url,
            data: params
        }
        return this.request(options);
    },
    post: function(url, params){
        var options = {
            method: "post",
            url: url,
            data: params
        }
        return this.request(options);
    },
    put: function(url, params){
        var options = {
            method: "put",
            url: url,
            data: params
        }
        return this.request(options);
    },
    delete: function(url, params){
        var options = {
            method: "delete",
            url: url,
            data: params
        }
        return this.request(options);
    }
}

if(typeof module != "undefined"){
    module.exports = Api;
}