import React from "react";
import { NavLink, useParams } from "react-router-dom";

const NavbarTop = () => {
  const { type } = useParams();

  const getActiveStyle = (linkType) => {
    return type === linkType ? { borderBottom: "5px solid #E15020" } : null;
  };

  return (
    <div>
      <p className="text-secondary d-flex justify-content-center">BROWSE</p>
      <nav className="navbar navbar-expand-lg my-3">
        
        <div className="container-fluid d-flex  ">
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
            
            <ul className="navbar-nav  gap-3">
              <li className="nav-item">
                <NavLink to="/" className="text-decoration-none text-white">
                  <h5 className="px-2">HOME</h5>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/content-characters"
                  className="text-decoration-none text-white"
                >
                  <h5 className="px-2" style={getActiveStyle("people")}>
                    CHARACTERS
                  </h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/content-species"
                  className="text-decoration-none text-white"
                >
                  <h5 className="px-2" style={getActiveStyle("species")}>
                    SPECIES
                  </h5>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/content-planets"
                  className="text-decoration-none text-white"
                >
                  <h5 className="px-2" style={getActiveStyle("planets")}>
                    PLANETS
                  </h5>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/content-starships"
                  className="text-decoration-none text-white"
                >
                  <h5 className="px-2" style={getActiveStyle("starships")}>
                    STARSHIPS
                  </h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/content-vehicles"
                  className="text-decoration-none text-white"
                >
                  <h5 className="px-2" style={getActiveStyle("vehicles")}>
                    VEHICLES
                  </h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/content-films"
                  className="text-decoration-none text-white"
                >
                  <h5 className="px-2" style={getActiveStyle("films")}>
                    FILMS
                  </h5>
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarTop;
