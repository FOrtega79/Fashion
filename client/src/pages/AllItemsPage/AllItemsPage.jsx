import { useEffect, useState } from "react";

function AllItems(props) {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{

        fetch(`http://localhost:5005/api/items/allItems`) // AQUÍ DEBERÍA IR ${process.env.APP_REACT_HOST pero da error de JSON ???}
        .then(response => response.json())
        .then(items => {
            setItems(items)
            setIsLoading(false)
        })
        .catch(error => console.error(error))
    }, [])




    return(
        <div>
            <h2>All Products...</h2>
            {
                !isLoading ? items.map(elm => <ul>
                <li>{elm.name}</li>
                <img src={elm.image} alt="img"/>
                <p>{elm.description}</p>
                <p>{elm.category}</p>
                <p>{elm.size}</p>
                <p>{elm.color}</p>
                <p>{elm.price}€</p>
                </ul>) 
                : <h3>Loading...</h3>
            }

        </div>
    )


}

export default AllItems