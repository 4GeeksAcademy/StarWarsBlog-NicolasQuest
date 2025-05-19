import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

const Species = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const [species, setSpecies] = useState([]);


     useEffect(() => {
       const storedSpecies = localStorage.getItem("swapi_species");
   
       if (storedSpecies && storedSpecies !== "undefined") {
         setSpecies(JSON.parse(storedSpecies));
       }
       else {
         fetch("https://swapi.tech/api/species/")
         .then((response) => {
           if (!response.ok) {
             throw new Error(response.status);
           }
           return response.json();
         })
         .then((data) => {
           setSpecies(data.results)
           localStorage.setItem("swapi_species", JSON.stringify(data.results))
       })
         .catch((error) =>
           console.error("couldn't access to the species, error: \n", error)
         );
       }
     }, []);;

  return (
    <div className="row  mt-5 ">
      <div className="col-2 d-flex">
        <SideBar />
      </div>
      <div className="col-10 ">
        <ul className="row row-cols-1 row-cols-xl-5 mx-0' px-o  ">
          {species.map((specie) => {
            return (
              <li
                key={specie.uid}
                className="col mb-3 d-flex justify-content-center px-2"
              >
                <div
                  className="card w-100"
                  style={{ height: "35rem", backgroundColor: "#282727" }}
                >
                  <img
                    src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/species/${specie.uid}.jpg`}
                    className="card-img-top imgMenu"
                    style={{ height: "22rem",  }}
                    alt={`foto de ${specie.name}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";
                    }}
                    onClick={() =>
                      navigate(`/content-databank/species/${specie.uid}`)
                    }
                  />
                  <div className="card-body border-top border-danger d-flex flex-column">
                    <h5 className="card-title text-white">{specie.name}</h5>
                    <div className="d-flex mt-auto pt-5 ">
                      <div
                        className="d-flex bank_data_hover"
                        onClick={() =>
                          navigate(`/content-databank/species/${specie.uid}`)
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
                            filter: "opacity(0.8",
                            cursor: "pointer",
                          }}
                        >
                          Databank{" "}
                        </p>
                      </div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9b/USSR_Star.png"
                        alt="icono Starwars"
                        style={{
                          width: "1.8rem",
                          height: "1.4rem",
                          objectFit: "cover",
                          cursor: "pointer",
                          filter:
                            "invert(25%) sepia(81%) saturate(10097%) hue-rotate(342deg) brightness(65%) contrast(101%)",
                        }}
                        className="pe-2 ms-auto star"
                        onClick={() => {
                          if (store.favorites.includes(specie.name)) {
                            alert(`${specie.name} is already in your favorites list`);
                            return;
                          }

                          dispatch({
                            type: "add_favorites",
                            payload: specie.name,
                          });
                        }}
                      />
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

export default Species;
