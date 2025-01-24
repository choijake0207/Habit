
import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router"
import Root from './Layout/Root'
import Dashboard from './Pages/Dashboard'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root/>}>
        <Route index element={<Dashboard/>}/>
      </Route>
    </>
  )
)


export default function App() {
  return (
      <RouterProvider router={router}/>
  )
}
