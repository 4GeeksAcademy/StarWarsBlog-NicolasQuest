import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

const Vehicles = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);

  
       useEffect(() => {
          const storedVehicles = localStorage.getItem("swapi_vehicles");
          if (storedVehicles && storedVehicles !== "undefined") {
            setVehicles(JSON.parse(storedVehicles));
          }
        }, []);
      

  return (
    <div className="row mt-5">
      <div className="col-2 d-flex">
        <SideBar />
      </div>
      <div className="col-10">
        <ul className="row row-cols-1 row-cols-xl-5 mx-0 px-0">
          {vehicles.map((vehicle) => {
            return (
              <li
                key={vehicle.uid}
                className="col mb-3 d-flex justify-content-center px-2"
              >
                <div
                  className="card w-100"
                  style={{ height: "35rem", backgroundColor: "#282727" }}
                >
                  <img
                    src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${vehicle.uid}.jpg`}
                    className="card-img-top imgMenu"
                    style={{ height: "22rem" }}
                    alt={`foto de ${vehicle.name}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";
                    }}
                    onClick={() =>
                      navigate(`/content-databank/vehicles/${vehicle.uid}`)
                    }
                  />
                  <div className="card-body border-top border-danger d-flex flex-column">
                    <h5 className="card-title text-white">{vehicle.name}</h5>
                    <div className="d-flex mt-auto pt-5">
                      <div
                        className="d-flex bank_data_hover"
                        onClick={() =>
                          navigate(`/content-databank/vehicles/${vehicle.uid}`)
                        }
                      >
                        <img
                          src="https://www.svgrepo.com/show/512914/star-wars-134.svg"
                          alt="icono Starwars"
                          style={{
                            width: "1.8rem",
                            height: "1.4rem",
                            
                            objectFit: "cover",
                            filter:
                              "invert(17%) sepia(90%) saturate(1882%) hue-rotate(0deg) brightness(98%) contrast(119%)",
                          }}
                          className="pe-2"
                        />
                        <p
                          className=""
                          style={{
                            color: "#dc3545",
                            filter: "opacity(0.8)",
                            cursor: "pointer",
                          }}
                        >
                          Databank
                        </p>
                      </div>
                      <button
                        className="pe-2 ms-auto star btn btn-outline-success h-75 w-25 btn-sm"
                        onClick={() => {
                          if (store.favorites.includes(vehicle.name)) {
                            alert(
                              `${vehicle.name} is already in your favorites list`
                            );
                            return;
                          }

                          dispatch({
                            type: "add_favorites",
                            payload: vehicle.name,
                          });
                        }}>
                          ☆
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Vehicles;
  