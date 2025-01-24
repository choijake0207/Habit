import React from 'react'
import {NavLink, Outlet} from "react-router"


export default function Root() {
  return (
    <div class="root-layout">   
        <NavLink to="/">Dashboard</NavLink>

        <Outlet/>

    </div>
  )
}
