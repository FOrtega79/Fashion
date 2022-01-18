import { useState, useContext } from "react"
import { AuthContext } from "../../context/auth.contex"
import { login } from "./../../services/auth.service"
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AlertMessage from "../AlertMessage/AlertMessage";
import { AlertContext } from '../../context/AlertMessage.context'

function LoginForm ({ fireFinalActions }) {

    const [loginForm, setLoginForm] = useState({
        email:"", 
        password:""
    })

    const {email, password} = loginForm
    const {logInUser} = useContext(AuthContext)
    const {setOpen} = useContext(AlertContext)

    const handleInputChange = e => {
        const { name, value } = e.target
        setLoginForm({...loginForm, [name]:value})
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        const credentials = { email, password }

        login(credentials)
        .then(res => {
            console.log("JWT token is... ", res.data)
            logInUser(res.data.authToken)
            fireFinalActions()
        })
        .catch(err => console.log(err))
    }

    const handleClick = () => {
      setOpen(true);
    };

        return(
            <div>
          
            <Box onSubmit={handleFormSubmit}
              component="form"
              sx={{
                "& > :not(style)": { mt: 5, mb:5, width: "25ch", display: 'flex',
              alignItems: 'center',
              flexDirection: 'column' },
              }}
              noValidate
              autoComplete="on"
            >
              <TextField 
              required
              id="standard-basic" 
              label="Email" 
              variant="standard"
              value={email}
              name='email'
              onChange={handleInputChange}
               />
      
              <TextField 
              id="filled-adornment-password"
              label="Password" 
              variant="standard" 
              value={password}
              name='password'
              onChange={handleInputChange}    
              />
      
              <Button 
              variant='contained' 
              type='submit'
              onClick={handleClick}
            //   disabled={loadingImage}>{loadingImage ? <Spinner /> : 'Sign up'}
              ><AlertMessage/>Login
              </Button>
      
            </Box>
            
    
    </div>
        )

} 

export default LoginForm