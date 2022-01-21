const User = require("../models/User.model")
import { AuthContext } from "../../client/src/context/auth.contex";


function getAdminLoggedIn (req, res, next) {

const {user} = useContext(AuthContext)
const isAdministrator = user.isAdmin

    if (email === 'admin@admin.com') {
        isAdministrator = true
        return;
      }
      next()
    

}


module.exports = { getAdminLoggedIn }