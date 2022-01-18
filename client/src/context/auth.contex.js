import React, { useState, useEffect } from "react"
import {verify} from './../services/auth.service'


const AuthContext = React.createContext()

function AuthProviderWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    const verifyStoredToken = () => {
        
        const storedToken = localStorage.getItem('authToken');
        
        // If the token exists in the localStorage
        if (storedToken) {
          // We must send the JWT token in the request's "Authorization" Headers
          verify(storedToken)
          .then((response) => { 
            const user = response.data;
            setUser(user);
            setIsLoggedIn(true);
            setIsLoading(false);
          })
          .catch((error) => { 
            setIsLoggedIn(false);
            setUser(null);
            setIsLoading(false);
          });      
        } else {
          setIsLoading(false);
        }   
      }

      const logInUser = (token) => {
        localStorage.setItem('authToken', token)
        verifyStoredToken()
    }


    return(
        <AuthContext.Provider value={{ isLoggedIn, isLoading, user, logInUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthProviderWrapper, AuthContext }