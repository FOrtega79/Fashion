import { useEffect, useState } from "react";
// import CircularSpinner from "../../components/Spinner/Spinner";
import Skeleton from '@mui/material/Skeleton';
import { GetAllItems } from "../../services/items.service";
import ItemCard from "../ItemCard/ItemCard";


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

    return isLoading ? <Skeleton variant="rectangular" width={420} height={300} /> :  
    items.map(item => <ItemCard {...item} key={item._id}/>)
    //  <ul>
    //     // <li><h2>{elm.name}</h2></li>
    //     // <img src={elm.image} alt="img" width={350}/>
    //     // <p>{elm.description}</p>
    //     // <p>{elm.category}</p>
    //     // <p>{elm.size}</p>
    //     // <p>{elm.color}</p>
    //     // <p>{elm.price}€</p>
    //     // </ul>)
}

export default AllItems