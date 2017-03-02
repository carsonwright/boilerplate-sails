/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');

module.exports = {

    _config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

    login: function(req, res) {

        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }
            req.session.userId = user.id
            req.session.user = user;
            return res.send({
                message: info.message,
                user: user
            });

        })(req, res);
    },

    logout: function(req, res) {
        req.session.userId = null;
        req.session.user = null;
        res.send(null);
    }
};

