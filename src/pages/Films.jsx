import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const storedFilms = localStorage.getItem("swapi_films");
    if (storedFilms && storedFilms !== "undefined") {
      setFilms(JSON.parse(storedFilms));
    }
  }, []);

 
  return (
    <div className="mt-5">
      <div className="row mt-5">
        <div className="col-2 d-flex justify-content-start">
          <SideBar />
        </div>

        <div className="col-10">
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              listStyle: "none",
              padding: 0,
            }}
          >
            {films.map((film) => (
              <li key={film.uid} className="text-white rounded">
                <img
                  src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/films/${film.uid}.jpg`}
                  alt={film.properties.title}
                  style={{ width: "100%", height: "50rem",  }}
                  className="rounded"
                  
                />
              </li> 
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Films;
