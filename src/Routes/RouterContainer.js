import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RouteWithLayout from '../Components/RouteWithLyout/RouteWithLayout';
import { routes } from './Routes';
import Login from '../views/Authentication/Login/Login';
import AuthLayout from '../Layouts/AuthLayout/AuthLayout';
import Signup from '../views/Authentication/Signup/Signup';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import { HomeScreen } from '../views/HomeScreen';

const RouterContainer = () => {
  const isLoggedIn=false;
  const rootUrl = (isLoggedIn ?(routes.home):(routes.landing))
  return (
    <div>
         <BrowserRouter>
         <Routes>
        {isLoggedIn ? (
          <>
         <Route exact path={routes.signin} element={<MainLayout><HomeScreen/></MainLayout>} />
          
        </>
          
        ) : (
          
          <>
            <Route exact path={routes.signin} element={<MainLayout><HomeScreen/></MainLayout>} />
        </>
        )}
         <Route exact path={routes.landing} element={<MainLayout><HomeScreen/></MainLayout>} />
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default RouterContainer