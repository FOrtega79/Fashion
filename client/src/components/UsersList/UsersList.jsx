import { useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import { Stack } from "@mui/material";
import { listUsers } from "../../services/auth.service";
import UserCard from "../UserCard/UserCard";


function UsersList(props) {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{

       listUsers()
        .then (response =>{ 
            setUsers(response.data)
            setIsLoading(false)
        })
        .catch(err => console.log(err))


    }, [])

    return isLoading ? <Stack spacing={1}>
    <Skeleton variant="rectangular" width={310} height={320} />
    <Skeleton variant="text" width={210}/>
    <Skeleton variant="text" width={80}/>
  </Stack> :  
    users.map(user => <UserCard {...user} key={user._id}/>)
    
}

export default UsersList