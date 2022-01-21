const User = require("../models/User.model")


function getAdminLoggedIn (req, res, next) {

    if (email === 'admin@admin.com') {
        User.isAdmin = true
        return;
      }
      next()
    

}


module.exports = { getAdminLoggedIn }