import Controller from '../config/controller';

export default class MenuBarController extends Controller{
  logout(e){
    e.preventDefault()

    Api.User.logout().then((response)=>{
      App.setState((state)=>{
          state.me = response;
      })
    })
  }
}