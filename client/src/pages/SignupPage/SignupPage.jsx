import NewUserSignupForm from "../../components/SignupForm/SignupForm";
import './SignupPage.css'

function NewUserSignUpPage(){
    return(
        <div className="signupform">
            <h1>Sign up</h1>
<NewUserSignupForm />

<p>Already have an account?</p>
<p>Please Log in</p>


</div>
    )
}

export default NewUserSignUpPage



