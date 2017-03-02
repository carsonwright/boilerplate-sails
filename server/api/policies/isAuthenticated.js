module.exports = function(req, res, next) {
   if (req.session.userId) {
        return next();
    }
    else{
        return res.send({error: "Not Authenticated"});
    }
};
