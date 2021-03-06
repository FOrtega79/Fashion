const express   = require('express')
const bcrypt    = require('bcrypt')
const jwt       = require('jsonwebtoken')
const User      = require('./../models/User.model')

const router = express.Router()
const saltRounds = 10

const { isAuthenticated } = require('./../middleware/middelware.JWT')
const { getAdminLoggedIn } = require('../middleware/middelwareIsAdmin')
// const { getAdminLoggedIn } = require('./../middleware/middelwareIsAdmin')


//Sign up Route

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
      return User.create({ username, email, password: hashedPassword })
    })
    .then((createdUser) => {
      console.log('created', createdUser)
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


// Login Route
 
router.post('/login', (req, res, next) => {
    const { email, password } = req.body;
   
    // Check if email or password are provided as empty string 
    if (email === '' || password === '') {
      res.status(400).json({ message: "Provide email and password." });
      return;
    }

   
    // Check the users collection if a user with the same email exists
    User.findOne({ email })
      .then((foundUser) => {
      
        if (!foundUser) {
          // If the user is not found, send an error response
          res.status(401).json({ message: "Email not found." })
          return;
        }
    
        // Compare the provided password with the isone saved in the database
        const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
   
        if (passwordCorrect) {
          // Deconstruct the user object to omit the password
          const { _id, email, username, isAdmin } = foundUser;
          
          // Create an object that will be set as the token payload
          const payload = { _id, email, username, isAdmin };
   
          // Create and sign the token
          const authToken = jwt.sign( 
            payload,
            process.env.TOKEN_SECRET,
            { algorithm: 'HS256', expiresIn: "720h" }
          );
   
          // Send the token as the response
          res.status(200).json({ authToken: authToken });
        }
        else {
          res.status(401).json({ message: "Unable to authenticate the user" });
        }
   
      })
      .catch(err => res.status(500).json({ message: "Internal Server Error" }));
  });


  // Verify Route

router.get('/verify', isAuthenticated, (req, res, next) => {       
    console.log(`req.payload`, req.payload);
    res.status(200).json(req.payload);
  });


  //Get all users Route
  router.get('/users', (req, res, next) => {
    User
    .find()
    .then(response => res.json(response))
    .catch(err => next(new Error(err)))
  })

module.exports = router
