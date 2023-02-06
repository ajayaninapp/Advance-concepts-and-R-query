import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from './Routes';
import Login from '../views/Authentication/Login/Login';
import AuthLayout from '../Layouts/AuthLayout/AuthLayout';


const RouterContainer = () => {
  const isLoggedIn=true;
  const rootUrl = (isLoggedIn ?(routes.home):(routes.landing))
  return (
    <div>
         <BrowserRouter>
         <Routes>
        {isLoggedIn ? (
          <>
         <Route exact path={routes.signin} element={<AuthLayout><Login/></AuthLayout>} />
          
        </>
          
        ) : (
          
          <>
            <Route exact path={routes.signin} element={<AuthLayout><Login/></AuthLayout>} />
        </>
        )}
         <Route exact path={routes.landing} element={<AuthLayout><Login/></AuthLayout>} />
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default RouterContainer