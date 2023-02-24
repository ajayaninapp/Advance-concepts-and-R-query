import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLoaderData } from "react-router-dom";
import RouteWithLayout from '../Components/RouteWithLyout/RouteWithLayout';
import { routes } from './Routes';
import Login from '../views/Authentication/Login/Login';
import AuthLayout from '../Layouts/AuthLayout/AuthLayout';
import Signup from '../views/Authentication/Signup/Signup';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import { HomeScreen } from '../views/HomeScreen';
import { useAuthDataContext } from '../views/AuthDataHandler/AuthDatahandler'
import { useLoadingContext } from '../Components/Loaders/LoadingHandler';
const RouterContainer = () => {
  const {userAuthData,isLoggedin}=useAuthDataContext();
  const rootUrl = (isLoggedin ?(routes.home):(routes.landing))
  const {mainLoaderOpen}=useLoadingContext();
  
  console.log(mainLoaderOpen)
  if (mainLoaderOpen){
    return <div>Loading......  </div>  
      
  }
  return (
    <div>
         <BrowserRouter>
         <Routes>
        {isLoggedin ? (
          <>
         <Route exact path={routes.home} element={<AuthLayout><HomeScreen/></AuthLayout>} />
          <Route exact path="*" element={<AuthLayout><HomeScreen/></AuthLayout>}/>
        </>
          
        ) : (
          
          <>
            <Route exact path={routes.signin} element={<AuthLayout><Login/></AuthLayout>} />
            <Route exact path="*" element={<AuthLayout><Login/></AuthLayout>} />
        </>
        )}
         
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default RouterContainer