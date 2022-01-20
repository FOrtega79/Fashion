import { useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import { GetAllItems } from "../../services/items.service";
import { Stack } from "@mui/material";
import ItemMini from "../ItemMini/ItemMini";


function ItemMiniList(props) {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{

       GetAllItems()
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
    items.map(item => <ItemMini {...item} key={item._id}/>)
    
}

export default ItemMiniList