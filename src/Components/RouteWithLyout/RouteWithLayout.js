import React from 'react'
import { Route } from 'react-router-dom'


const RouteWithLayout = ({ layout: Layout, element: Component,path:pathname, ...rest })=> {
  return (
    <Route  path={pathname} element={<Layout><Component /></Layout>}/>
  )
}

export default RouteWithLayout