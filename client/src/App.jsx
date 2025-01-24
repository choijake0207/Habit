
import React from 'react'
import "./App.css"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router"
import Root from './Layout/Root'
import Dashboard from './Pages/Dashboard/Dashboard'
import Analytics from "./Pages/Analytics/Analytics"
import Friends from "./Pages/Friends/Friends"
import Profile from "./Pages/Profile/Profile"
import Settings from "./Pages/Settings/Settings"
import SingleView from './Pages/SingleView/SingleView'
import ViewAll from './Pages/ViewAll/ViewAll'
import Login from './Pages/LogReg/Login'
import Register from './Pages/LogReg/Register'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      
      <Route path="/" element={<Root/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/friends" element={<Friends/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/myhabits" element={<ViewAll/>}/>
        <Route path="/singleview" element={<SingleView/>}/>
      </Route>
    </>
  )
)


export default function App() {
  return (
      <RouterProvider router={router}/>
  )
}
