import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { createNewItem } from '../../services/items.service';


function NewItemForm (props) {

    const [itemForm, setItemForm] = useState({
        name:'', 
        description:'', 
        price:'', 
        color:'', 
        size:'', 
        discount:false, 
        image:'',
        category:''

    })

    const { name, description, price, color, size, discount, image, category } = itemForm

    const handleInputChange = e => {
        const { name, value } = e.target
        setItemForm({...itemForm, [name]:value})
    }

    const handleFormSubmit = e =>{
        createNewItem(itemForm)
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }

    return (
      <Box onSubmit={handleFormSubmit}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="on"
      >
        <TextField 
        required 
        id="standard-basic" 
        label="Item name" 
        variant="standard" 
        value={name}
        name='name'
        onChange={handleInputChange}    
        />

        <TextField 
        required
        id="standard-multiline-static" 
        label="Description" 
        variant="standard" 
        multiline
        rows={4}
        value={description}
        name='description'
        onChange={handleInputChange}
        />

        <TextField 
        required
        id="standard-basic" 
        label="Price in €" 
        variant="standard"
        value={price}
        name='price'
        onChange={handleInputChange}
         />

        <TextField 
        id="standard-basic" 
        label="Color" 
        variant="standard" 
        value={color}
        name='color'
        onChange={handleInputChange}    
        />
        
        <TextField 
        id="standard-basic" 
        label="Size" 
        variant="standard" 
        value={size}
        name='size'
        onChange={handleInputChange}    
        />
        
        <TextField 
        id="standard-basic" 
        label="Discount" 
        variant="standard" 
        value={discount}
        name='discount'
        onChange={handleInputChange}    
        />
        
        <TextField 
        id="standard-basic" 
        label="Image" 
        variant="standard" 
        value={image}
        name='image'
        onChange={handleInputChange}    
        />
        
        <TextField 
        id="standard-basic" 
        label="Category" 
        variant="standard" 
        value={category}
        name='category'
        onChange={handleInputChange}    
        />

        <Button variant='outlined' type='submit'>Create Item</Button>

      </Box>
    );

}

export default NewItemForm