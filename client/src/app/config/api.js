class User {
    constructor(values = {}){
        this.email = values.email
        return this;
    }
    static url(){
        return '/user';
    } 
    static create(params = {}){
        let klass = this;
        return new Promise(function(resolve, reject){
            Api.connection.post(klass.url(), params, function(response, status){
                if(status.statusCode != 404){
                    resolve(new klass(response));
                }else{
                    reject(response);
                }
            })
        });
    }
    static me(){
        let klass = this;
        return new Promise((resolve, reject)=>{
            Api.connection.get('/me', {}, (response, status)=>{
                if(status.statusCode != 404){
                    resolve(new klass(response));
                }else{
                    reject(response);
                }
            })
        });
    }
    static authenticate(params = {}){
        let klass = this;
        return new Promise(function(resolve, reject){
            Api.connection.post('/login', params, function(response = {}){
                resolve(new klass(response.user))
            })
        });
    }
    static logout(){
        let klass = this;
        return new Promise(function(resolve, reject){
            Api.connection.delete('/logout', null, function(response = null){
                resolve(response)
            })
        });
    }
}


export default {
    User: User
};