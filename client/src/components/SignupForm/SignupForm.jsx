import { Alert, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { styled } from '@mui/material/styles'
import Spinner from './../Spinner/Spinner'
import { AlertContext } from '../../context/AlertMessage.context';
import AlertMessage from '../AlertMessage/AlertMessage';
import { signup } from '../../services/auth.service';

function NewUserSignupForm({fireFinalActions}) {

    const [newUserForm, setNewUserForm] = useState({
        username:'', 
        email:'', 
        password:''
    })

    const { username, email, password } = newUserForm

    const handleInputChange = e => {
        const { name, value } = e.target
        setNewUserForm({...newUserForm, [name]:value})
    }

    const handleFormSubmit = e =>{
        e.preventDefault()

        const credentials = {username, email, password}

        signup(credentials)
        .then(response => (response.data))
        .catch(err => console.log(err))
    }
    
    // const Input = styled('input')({
    //     display: 'none',
    //   });

      return (
          <>
          
        <Box onSubmit={handleFormSubmit}
          component="form"
          sx={{
            "& > :not(style)": { mt: 8, mb:5, width: "25ch", display: 'flex',
          alignItems: 'center',
          flexDirection: 'column' },
          }}
          noValidate
          autoComplete="on"
        >
          <TextField 
          required 
          id="standard-basic" 
          label="Username" 
          variant="standard" 
          value={username}
          name='username'
          onChange={handleInputChange}    
          />
  
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
        //   disabled={loadingImage}>{loadingImage ? <Spinner /> : 'Sign up'}
          >Sign Up
          </Button>
        </Box>
        

</>
      );

      
}


export default NewUserSignupForm