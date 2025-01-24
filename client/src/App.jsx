
import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router"
import Root from './Layout/Root'
import Dashboard from './Pages/Dashboard'
import Analytics from "./Pages/Analytics"
import Friends from "./Pages/Friends"
import Profile from "./Pages/Profile"
import Settings from "./Pages/Settings"



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/friends" element={<Friends/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Route>
    </>
  )
)


export default function App() {
  return (
      <RouterProvider router={router}/>
  )
}
