import {Link} from 'react-router-dom'
import { Button } from '@mui/material'
import NewItemForm from '../../components/NewItemForm/NewItemForm'
import './IndexPage.css'

function IndexPage(){

return(
<div className='indexPage'>
    
    <Link to="/list">
    <div className='indexText'>
    <Button  variant="contained" color='secondary' >Discover our New Collection!</Button>
    </div>
    <img src="https://cdn.shopify.com/s/files/1/0569/9138/3701/products/street-bag-stromboli-pink-851652_800x1200.jpg" alt="img_index" width={500} />
    
    </Link>

    

</div>
    
)

}

export default IndexPage