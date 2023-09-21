import { useAuth0 } from "@auth0/auth0-react";
import "./login.css"
import React from 'react'

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated, isLoading} = useAuth0()
    if(isLoading) {
        return <div className="loading">Please wait while we log you in!</div>
    }
    return (
    !isAuthenticated && (
        <div className="button-container">
            <button onClick={()=> loginWithRedirect()}>Sign in</button> <span>Please, log in</span>
            
        </div>
        

    )
    
    
    )
}

export default LoginButton