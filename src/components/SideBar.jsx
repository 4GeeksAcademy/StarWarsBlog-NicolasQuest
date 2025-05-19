import React from "react";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `text-decoration-none ${isActive ? "active selected text-white" : "text-white"}`;

const SideBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex flex-column">
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column gap-3">

              <li className="nav-item">
                <p className="text-secondary px-2">BROWSE</p>
              </li>
              <li className="nav-item">
                <NavLink to="/" className={navLinkClass}>
                  <h5 className="px-2">HOME</h5>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/content-characters" className={navLinkClass}>
                  <h5 className="px-2">CHARACTERS</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/content-species" className={navLinkClass}>
                  <h5 className="px-2">SPECIES</h5>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/content-planets" className={navLinkClass}>
                  <h5 className="px-2">PLANETS</h5>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/content-starships" className={navLinkClass}>
                  <h5 className="px-2">STARSHIPS</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/content-vehicles" className={navLinkClass}>
                  <h5 className="px-2">VEHICLES</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/content-films" className={navLinkClass}>
                  <h5 className="px-2">FILMS</h5>
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
