import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">

        {/* Logo / Brand */}
        <NavLink className="navbar-brand fw-bold fs-4 text-warning" to="/">
          🎬 MovieApp
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link px-3"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/add"
                className="nav-link px-3"
              >
                Add Movies
              </NavLink>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar