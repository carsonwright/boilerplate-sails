import Controller from '../config/controller';

export default class SignInController extends Controller{
    signin(e){
        e.preventDefault();
        console.logBlock("Ref", `${this.refs.email.value} << Email Value via ref`)
        console.logBlock("State Email", `${this.state.email} << Email Value via State`)
        console.logBlock("State", this.state)
    }
    setEmail(e){
        this.input("email", e)
    }
    setPassword(e){
        this.input("password", e)
    }
}