import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { AlertContext } from '../../context/AlertMessage.context';
import AlertMessage from '../AlertMessage/AlertMessage';
import { signup } from '../../services/auth.service';
import {useNavigate} from 'react-router-dom'
import './SignupForm.css'

function NewUserSignupForm({ fireLogin }) {
  const [newUserForm, setNewUserForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = newUserForm;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserForm({ ...newUserForm, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const credentials = { username, email, password };

    signup(credentials).then((response) => response.data);
    fireLogin().catch((err) => console.log(err));
  };

  // const Input = styled('input')({
  //     display: 'none',
  //   });

  return (
    <div className="signUp">
      <Box
        onSubmit={handleFormSubmit}
        component="form"
        sx={{
          "& > :not(style)": {
            mt: 8,
            mb: 5,
            width: "25ch",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          },
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
          name="username"
          onChange={handleInputChange}
        />

        <TextField
          required
          id="standard-basic"
          label="Email"
          variant="standard"
          value={email}
          name="email"
          onChange={handleInputChange}
        />

        <TextField
          id="filled-adornment-password"
          label="Password"
          variant="standard"
          value={password}
          name="password"
          onChange={handleInputChange}
        />

        <Button
          color="secondary"
          variant="outlined"
          type="submit"
        >Sign Up
        </Button>
      </Box>
    </div>
  );
}


export default NewUserSignupForm