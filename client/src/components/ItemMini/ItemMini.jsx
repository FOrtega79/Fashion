import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'

function ItemMini({name, description, price, color, size, discount, image, category, _id}) {
    

    return (
        <Card sx={{ maxWidth: 175, mb:2}}>
      <CardActionArea>
      <Link to={`/details/${_id}`}>
        <CardMedia
          component="img"
          height="160"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div" >
          {name}
          </Typography>
        
          <Typography variant="body2" color="text.secondary" >
            {price}€
          </Typography>
          
        </CardContent>
        </Link>
      </CardActionArea>
      <Typography variant="body2" color="text.secondary" >
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Color: {color}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Size: {size}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {category}
          </Typography>
      {/* <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions> */}
    </Card>
  
    )
}

export default ItemMini