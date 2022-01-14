import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { createNewItem } from '../../services/items.service';
import { styled } from '@mui/material/styles'
import { uploadImg } from '../../services/uploadImage.service';
import Spinner from './../Spinner/Spinner'

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

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.target
        setItemForm({...itemForm, [name]:value})
    }

    const handleFormSubmit = e =>{
        e.preventDefault()
        createNewItem(itemForm)
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

      setLoadingImage(true)
      const uploadData = new FormData()
      uploadData.append('imageData', e.target.files[0])

      uploadImg(uploadData)
        .then(res => {
          setLoadingImage(false) 
          setItemForm({...itemForm, imageUrl: res.data.cloudinary_url})
        .catch(err => console.log(err))
    })
  }

    const Input = styled('input')({
      display: 'none',
    });

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


        
        {/* <TextField 
        required
        id="standard-basic" 
        label="Upload Image" 
        variant="standard" 
        value={image}
        name='image'
        type="file"
        onChange={ handleFileUpload }
      /> */}
        

      <label htmlFor="contained-button-file">
        <Input accept="image/*"
        id="contained-button-file"  
        type="file"  
        onChange={ handleFileUpload } />
        
        <Button variant="outlined" component="span" >
          Upload Image
        </Button>
      </label>
        

        <TextField 
        required
        id="standard-basic" 
        label="Category" 
        variant="standard" 
        value={category}
        name='category'
        onChange={handleInputChange}    
        />

        <Button variant='contained' type='submit' disabled={loadingImage}>{loadingImage ? <Spinner /> : 'Create Item'}</Button>

      </Box>
    );

}

export default NewItemForm