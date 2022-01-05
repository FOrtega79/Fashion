import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

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

    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField 
        required 
        id="standard-basic" 
        label="Item name" 
        variant="standard" />

        <TextField 
        id="standard-basic" 
        label="Description" 
        variant="standard" />

        <TextField 
        required
        id="standard-basic" 
        label="Price in €" 
        variant="standard" />
        
        <TextField id="standard-basic" label="Color" variant="standard" />
        <TextField id="standard-basic" label="Size" variant="standard" />
        <TextField id="standard-basic" label="Discount" variant="standard" />
        <TextField id="standard-basic" label="Image" variant="standard" />
        <TextField id="standard-basic" label="Category" variant="standard" />
      </Box>
    );

}

export default NewItemForm