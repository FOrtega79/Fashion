import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AlertContext } from "../../context/AlertMessage.context"
import LoginForm from "../../components/LoginForm/LoginForm"
import './LoginPage.css'

function LoginPage() {



    return(
        <div className="loginPage">
        <h1>Login</h1>
        <LoginForm />
        
        <p>Already have an account?</p>
        <p>Please Log in</p>
        
        </div>
    )
}

export default LoginPage