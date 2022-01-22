import { useContext } from 'react'
import { AuthContext } from './../context/auth.contex'
import { AlertContext } from './../context/AlertMessage.context'
import CircularSpinner from './../components/Spinner/Spinner'
import { Outlet, Navigate } from 'react-router-dom' 

function PrivateRoute(){

    const { isLoggedIn, isLoading } = useContext(AuthContext)
    const { setOpen ,setAlertInfo} = useContext(AlertContext)

    if (isLoading) {
        return <CircularSpinner />
    }

    if (!isLoggedIn) {
        setOpen(false)
        // setAlertInfo({description:'Restricted Access'})
        return <Navigate to="/list"/>
    }

return <Outlet/>

}

export default PrivateRoute