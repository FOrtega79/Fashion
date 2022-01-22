import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import './404.css'

function NotFound(){

    return(
        <div className="Error404">
            <h1>404 Error</h1>
            <h2>Not Found...</h2>

            <Button variant="outlined" color="secondary">
               Go to Homepage <Link to={"/"}/>
            </Button>
        </div>
    )
}

export default NotFound