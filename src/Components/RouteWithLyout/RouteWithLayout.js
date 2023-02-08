import React from 'react'
import { Route } from 'react-router-dom'
import MainLayout from '../../Layouts/MainLayout/MainLayout'
import AuthLayout from '../../Layouts/AuthLayout/AuthLayout'


const RouteWithLayout = ({ layout: Layout, element: Component,path:pathname, ...rest })=> {
  return (
    <Route  path={pathname} element={<Layout><Component /></Layout>}/>
  )
}

export default RouteWithLayout