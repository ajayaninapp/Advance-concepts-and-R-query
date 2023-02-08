import { Auth } from 'aws-amplify';
import React, { createContext, useContext, useEffect,useState,useMemo } from 'react'



const AuthDataContext=createContext(()=>{});

export const useAuthDataContext =()=>useContext(AuthDataContext);

const clearAuthData={};


const AuthDatahandler = props => {
  const [isLoggedin,setIsLoggedIn]=useState(false)
    const [authData,setAuthData]=useState(clearAuthData)
    useEffect(() => {
      Auth.currentAuthenticatedUser()
      .then(res=>{
        setAuthData(res)
        setIsLoggedIn(true)
      })
      .catch(
        ()=>{
          setAuthData(clearAuthData)
          setIsLoggedIn(false)
        }
        
      )
    
     
    }, [])
    const signIn=async(username,password)=>{
        await Auth.signIn(username,password)
        .then(res=>{
            setAuthData(res)
            setIsLoggedIn(true)
        })
        .catch(()=>{
            setAuthData(clearAuthData)
            setIsLoggedIn(false)
        })
    }
    const signOut=async()=>{
      await Auth.signOut()
      .then(res=>{
        setAuthData(clearAuthData)
        setIsLoggedIn(false)
      })
      .catch(
        setIsLoggedIn(false)
      )
    }
    const contextPayload=useMemo(()=>({
        userAuthData:authData,
        signIn:signIn,
        isLoggedin:isLoggedin,
        signOut:signOut
        
    }),[authData])
  return <AuthDataContext.Provider value={contextPayload}{...props}/>
}

export default AuthDatahandler