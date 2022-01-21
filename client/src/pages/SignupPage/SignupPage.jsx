import NewUserSignupForm from "../../components/SignupForm/SignupForm";
import './SignupPage.css'
import { useNavigate } from "react-router-dom"
import { AlertContext } from "../../context/AlertMessage.context"
import { useContext } from "react"


function NewUserSignUpPage(){

    const {setAlertInfo} = useContext(AlertContext)
    const navigate = useNavigate()
    const fireLogin = () =>{
        // setOpen(true)
        setAlertInfo({title:'', description:'Successfully Signed up'})
        navigate('/login')
    }

    return(
        <div className="signupform">
            <h1>Sign up</h1>
<NewUserSignupForm fireLogin={fireLogin} />

<p>Already have an account?</p>
<p>Please Log in</p>


</div>
    )
}

export default NewUserSignUpPage



