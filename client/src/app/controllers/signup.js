import Controller from '../config/controller';
import {ApiErrors} from '../helpers';

export default class SignUpController extends Controller{
    signup(e){
        e.preventDefault();
        if(this.state.password != this.state.passwordConfirmation){
            return false;
        }else{
            let params = {
                email: this.state.email,
                password: this.state.password
            }
            let com = this;
            Api.User.create(params).then(function(data){
                App.setState((state)=>{
                    state.me = data;
                }).then(()=>{
                    App.navigate("/")
                })
            }).catch((errors)=>{
                com.setState({errors: ApiErrors(errors).messageList()});
            })
        }
    }
    setEmail(e){
        this.input("email", e)
    }
    setPassword(e){
        this.input("password", e)
    }
    setPasswordConfirmation(e){
        this.input("passwordConfirmation", e)
    }
}