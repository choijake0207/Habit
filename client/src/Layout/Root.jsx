import React from 'react'
import {NavLink, Outlet} from "react-router"


export default function Root() {
  return (
    <div class="root-layout"> 
        <aside>
          <nav>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/myhabits">My Habits</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/analytics">Analytics</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </nav>
        </aside>

        <main class="main-content">
          <Outlet/>
        </main>

    </div>
  )
}
