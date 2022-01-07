import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Beadcrum from '../../components/Beadcrum/Beadcrum'
import {GetOneItem} from "./../../services/items.service"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import { Link } from 'react-router-dom'


function ItemDetailsPage(props){
    
    const [item, setItem] = useState({})
    const {itemId} = useParams()

    useEffect(()=>{
        GetOneItem(itemId)
        .then(response => setItem(response.data) )
        .catch(err => console.log(err))
    },[])
    
    return(
        <>
        <Beadcrum />
        <Card sx={{ maxWidth: 500 }}>
      
      
        <CardMedia
          component="img"
          width={500}
          image={item.image}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
          {item.name}
          </Typography>
        
          <Typography variant="h5" color="text.secondary" align='center'>
            {item.price}€
          </Typography>
        </CardContent>
        
      
      <CardActions>
        <Button variant='contained'  size="large" color='inherit'>
          Add to cart
        </Button>
      </CardActions>

      <CardContent>
          <Typography gutterBottom variant="body1" component="div" align='center'>
          {item.description}
          </Typography>
    </CardContent>

<Divider></Divider>

<CardContent>
          <Typography gutterBottom variant="body1" component="div">
          Color: {item.color}
          Size: {item.size}
          Category: {item.category}
          </Typography>
    </CardContent>


    </Card>
        </>
    )
}

export default ItemDetailsPage