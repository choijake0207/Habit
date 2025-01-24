import React from 'react'
import {NavLink, Outlet} from "react-router"
import {House, GearSix, Users, SquaresFour, ChartPie, User, SignOut} from "phosphor-react"
import "./root.css"


export default function Root() {
  return (
    <div class="root"> 

        <nav class="root_navbar">
          <div className="logo-wrap">Forwards</div>
          <NavLink  to="/"><House/>Dashboard</NavLink>
          <NavLink  to="/myhabits"><SquaresFour/>My Habits</NavLink>
          <NavLink  to="/friends"><Users/>Friends</NavLink>
          <NavLink  to="/analytics"><ChartPie/>Analytics</NavLink>
          <NavLink  to="/profile"><User/>Profile</NavLink>
          <NavLink  to="/settings"><GearSix/>Settings</NavLink>
          <button class="navbar_signout"><SignOut/></button>
        </nav>

        <main class="main-content">
          <Outlet/>
        </main>

    </div>
  )
}
