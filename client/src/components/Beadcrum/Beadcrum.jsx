import { Breadcrumbs, Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import { Link } from "react-router-dom"



function handleClick(e) {
    e.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

function Beadcrum() {

    return(
        <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={"/"} color="success">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="small" color="default"/>
            Home
          </Link>
          <Link to={"/list"}>
            All Items
          </Link>
          {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
        </Breadcrumbs>
      </div>
    )
}

export default Beadcrum

