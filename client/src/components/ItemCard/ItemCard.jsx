import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'
import './ItemCard.css'

function ItemCard({name, description, price, color, size, discount, image, category, _id}) {

    return (
      <div className='itemCard'>
        <Card sx={{ maxWidth: 445, mb: 2, mt: 2}}>
      <CardActionArea>
      <Link to={`/details/${_id}`}>
        <CardMedia
          component="img"
          height="520"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
          {name}
          </Typography>
        
          <Typography variant="body2" color="text.secondary" >
            {price}€
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" variant='outlined'>
          Add to cart
        </Button>
      </CardActions>
    </Card>
    </div>
    )
}

export default ItemCard