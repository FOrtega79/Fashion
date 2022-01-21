function getAdminLoggedIn (req, res, next) {
    const { email, isAdmin } = req.payload

    if (email === 'admin@admin.com' && isAdmin) {
      return next()
    }
     return null
    

}

module.exports = { getAdminLoggedIn }