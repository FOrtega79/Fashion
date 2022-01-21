import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AlertContext } from "../../context/AlertMessage.context"
import LoginForm from "../../components/LoginForm/LoginForm"
import './LoginPage.css'

function LoginPage() {

    const {setOpen, setAlertInfo} = useContext(AlertContext)
    const navigate = useNavigate()

    const fireFinalActions = () =>{
        // setOpen(true)
        setAlertInfo({title:'', description:'Successfully logged in'})
        navigate('/user/profile')
    }

    return(
        <div className="loginPage">
        <h1>Login</h1>
        {/* <LoginForm /> */}
        <LoginForm fireFinalActions={fireFinalActions}/>
        
        <p>Already have an account?</p>
        <p>Please Log in</p>
        
        </div>
    )
}

export default LoginPage