import Controller from '../config/controller';

export default class SignInController extends Controller{
    signin(e){
        e.preventDefault();
        Api.User.authenticate(this.state).then(function(data){
            App.setState((state)=>{
                state.me = data;
            }).then(()=>{
                App.navigate("/")
            })
            
        })
    }
    setEmail(e){
        this.input("email", e)
    }
    setPassword(e){
        this.input("password", e)
    }
}