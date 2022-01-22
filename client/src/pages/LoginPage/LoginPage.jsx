import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AlertContext } from "../../context/AlertMessage.context"
import LoginForm from "../../components/LoginForm/LoginForm"
import './LoginPage.css'


function LoginPage() {

    const {setOpen, setAlertInfo} = useContext(AlertContext)
    const navigate = useNavigate()

    const fireFinalActions = () =>{
        setOpen(true)
        setAlertInfo({title:'', description:'Successfully logged in'})
        navigate('/user/profile')
    }

    return (
      <div className="loginPage">
        <h1 className="loginTitle">Login</h1>
        {/* <LoginForm /> */}
        <LoginForm fireFinalActions={fireFinalActions} />

        <div className="loginText">
          <p>Don't have an account?</p>
          <p>Please <Link to= '/signup'>Sign up</Link></p>
        </div>
      </div>
    );
}

export default LoginPage