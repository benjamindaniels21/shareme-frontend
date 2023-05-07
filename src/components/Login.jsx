import React from 'react';
import {GoogleOauthProvider} from "@react-oauth/google";



const Login = () => {
  return (
    <GoogleOauthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}>Login</GoogleOauthProvider>
  )
}

export default Login