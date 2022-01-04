import { useEffect, useState } from "react";
// import CircularSpinner from "../../components/Spinner/Spinner";
import Skeleton from '@mui/material/Skeleton';
import { GetAllItems } from "../../services/items.service";

function AllItems(props) {

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

    return isLoading ? <Skeleton variant="rectangular" width={600} height={600} /> :  items.map(elm => <ul>
        <li>{elm.name}</li>
        <img src={elm.image} alt="img"/>
        <p>{elm.description}</p>
        <p>{elm.category}</p>
        <p>{elm.size}</p>
        <p>{elm.color}</p>
        <p>{elm.price}€</p>
        </ul>)
}

export default AllItems