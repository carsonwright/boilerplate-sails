/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function(req, res){
    User.create({
      email: req.param('email'), 
      password: req.param('password')
    }).then((response)=>{
      req.session.user = response;
      req.session.userId = response.id;
      res.send(response)
    }).catch((error)=>{
      res.status(404).json({error: error})
    })
  },

  me: function(req, res){
    if(req.session.user){
      return res.json(req.session.user)
    }else{
      return res.status(404).json()
    }
    
  },
  /**
   * `UserController.login()`
   */
  login: function (req, res) {
    return res.json({
      todo: 'login() is not implemented yet!'
    });
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  }
};

