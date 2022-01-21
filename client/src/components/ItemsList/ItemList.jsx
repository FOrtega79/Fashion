import { useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import { GetAllItems } from "../../services/items.service";
import ItemCard from "../ItemCard/ItemCard";
import { Stack } from "@mui/material";


function AllItems(props) {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const storedToken = localStorage.getItem('authToken');

    useEffect(() =>{

       GetAllItems(storedToken)
        .then (response =>{ 
            setItems(response.data)
            setIsLoading(false)
        })
        .catch(err => console.log(err))


    }, [])

    return isLoading ? <Stack spacing={1}>
    <Skeleton variant="rectangular" width={310} height={320} />
    <Skeleton variant="text" width={210}/>
    <Skeleton variant="text" width={80}/>
  </Stack> :  
    items.map(item => <ItemCard {...item} key={item._id}/>)
    
}

export default AllItems