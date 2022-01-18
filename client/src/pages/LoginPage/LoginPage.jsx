import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AlertContext } from "../../context/AlertMessage.context"
import LoginForm from "../../components/LoginForm/LoginForm"
import './LoginPage.css'

function LoginPage() {

    const {setOpen, setAlertInfo} = useContext(AlertContext)

    const fireFinalActions = () =>{
        setOpen(true)
        setAlertInfo({title:'', description:'Successfully logged in'})
        Navigate('/user/profile')
    }

    return(
        <div className="loginPage">
        <h1>Login</h1>
        <LoginForm fireFinalActions={fireFinalActions}/>
        
        <p>Already have an account?</p>
        <p>Please Log in</p>
        
        </div>
    )
}

export default LoginPage