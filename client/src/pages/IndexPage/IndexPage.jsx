import {Link} from 'react-router-dom'
import { Button } from '@mui/material'
import NewItemForm from '../../components/NewItemForm/NewItemForm'

function IndexPage(){

return(
<div>
    <>
    <Link to="/list">
    <img src="https://cdn.shopify.com/s/files/1/0569/9138/3701/products/street-bag-stromboli-pink-851652_800x1200.jpg" alt="img_index" width={500}/>
    <Button variant="text" color='primary'  >Discover our New Collection!</Button>
    </Link>

    <NewItemForm />
    </>

</div>
    
)

}

export default IndexPage