import React from 'react'
import Login from '../../views/Authentication/Login/Login'
import AuthHeader from './Components/AuthHeader'

const AuthLayout = (props) => {
  const {children}=props
  return (
    <>
    <AuthHeader/>
    {children}
    </>

  )
}

export default AuthLayout