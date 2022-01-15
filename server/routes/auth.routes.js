const express   = require('express')
const bcrypt    = require('bcrypt')
const User      = require('./../models/User.model')

const router = express.Router()
const saltRounds = 10

router.post('/signup', (req, res) => {
    const { username, email, password} = req.body

    if (username ==='' || email ==='' || password ===''){
        res.status(400).json({ message: "Provide username, email and password"})
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ message: 'Provide a valid email address.' })
    return
  }

  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    res.status(400).json({ message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.' });
    return
  }


  // Check the users collection if a user with the same email already exists
  User
     .findOne({ email })
    .then((foundUser) => {
      // If the user with the same email already exists, send an error response
      if (foundUser) {
        res.status(400).json({ message: "User already exists." })
        return;
      }
 
      // If email is unique, proceed to hash the password
      const salt = bcrypt.genSaltSync(saltRounds)
      const hashedPassword = bcrypt.hashSync(password, salt)
 
      // Create the new user in the database
      // We return a pending promise, which allows us to chain another `then` 
      return User.create({ email, password: hashedPassword, username })
    })
    .then((createdUser) => {
      // Deconstruct the newly created user object to omit the password
      // We should never expose passwords publicly
      const { email, username, _id } = createdUser
    
      // Create a new object that doesn't expose the password
      const user = { email, username, _id }
 
      // Send a json response containing the user object
      res.status(201).json({ user: user })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" })
    })
})
 

module.exports = router
