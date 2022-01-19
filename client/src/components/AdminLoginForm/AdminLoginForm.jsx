import { useState, useContext } from "react"
import { AuthContext } from "../../context/auth.contex"
import { adminlogin } from "./../../services/auth.service"
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AlertMessage from "../AlertMessage/AlertMessage";
import { AlertContext } from '../../context/AlertMessage.context'

function AdminLoginForm ({ fireFinalActions }) {

    const [adminLoginForm, setAdminLoginForm] = useState({
        email:"", 
        password:""
    })

    const {email, password} = adminLoginForm
    const {logInAdmin} = useContext(AuthContext)
    const {setOpen} = useContext(AlertContext)

    const handleInputChange = e => {
        const { name, value } = e.target
        setAdminLoginForm({...adminLoginForm, [name]:value})
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        const credentials = { email, password }

        adminlogin(credentials)
        .then(res => {
            console.log("JWT token is... ", res.data)
            logInAdmin(res.data.authToken)
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
              variant='outlined' 
              type='submit'
              onClick={handleClick}
            //   disabled={loadingImage}>{loadingImage ? <Spinner /> : 'Sign up'}
              >Login
              </Button>
      
            </Box>
            
    
    </div>
        )

} 

export default AdminLoginForm