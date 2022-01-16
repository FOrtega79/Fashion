import React, { useState, useEffect } from "react"


const AuthContext = React.createContext()

function AuthProviderWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    return(
        <AuthContext.Provider value={{ isLoggedIn, isLoading, user}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthProviderWrapper, AuthContext }