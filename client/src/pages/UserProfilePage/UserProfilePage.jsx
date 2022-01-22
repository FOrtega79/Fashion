import { useContext } from "react";
import TextField from '@mui/material/TextField';
import './UserProfilePage.css'
import { Button } from "@mui/material";


function UserProfilePage () {

    return(
        <div className="userProfilePage">
        <div className="profileDetails">
        <h1>Profile Details</h1>
        <p>Your Username: </p>
        <p>Your registered email: </p>
        </div>
        <h2>Support</h2>
        <div>
        <TextField 
        required 
        id="standard-basic" 
        label="Your email" 
        variant="standard" 
        // value={name}
        name='name'
        // onChange={handleInputChange}    
        />
        </div>
        <div className="issueTextField">
        <TextField 
        required
        id="standard-multiline-static" 
        label="Describe your issue" 
        variant="standard" 
        multiline
        rows={4}
        // value={description}
        name='description'
        // onChange={handleInputChange}
        />
        </div>
        <Button variant="outlined" component="span" color="secondary" disabled >
          Send your message
        </Button>
        <h2>Recent purchases</h2>
        

        </div>
    )
}

export default UserProfilePage