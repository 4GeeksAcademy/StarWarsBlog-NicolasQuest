import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import NavbarTop from "../components/NavbarTop";

function Databank() {
  const { uid, type } = useParams();
  const { store, dispatch } = useGlobalReducer();

  const [dataBank, setdataBank] = useState([]);

  let imgType = "";

  if (type === "people") imgType = "characters";


  const handleClick = (e) => {
    e.preventDefault();

    const name = dataBank.properties.name;

    if (store.favorites.includes(name)) {
      alert(`${name} is already in your favorites list`);
      return;
    }
  
    dispatch({
      type: "add_favorites",
      payload: name,
    });
    alert(`${name} added to your favorites list`);
  };

  useEffect(() => {
    fetch(`https://swapi.tech/api/${type}/${uid}`)
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((data) => setdataBank(data.result))
      .catch((error) =>
        console.error("Couldn't access the dataBank, error:\n", error)
      );
  }, [uid, type]);

  if (!dataBank || !dataBank.properties) {
    return <div className="text-white text-center mt-5">Cargando...</div>;
  }

  return (
    <div className="container-fluid mt-5">
        <div className="d-flex justify-content-center">
        <NavbarTop />
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <div
            className="card w-100  d-flex flex-row rounded" 
            style={{ backgroundColor: "#282727" }}
          >
            <img
              src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${imgType}/${uid}.jpg`}
              className="foto-databank rounded-start"
              alt={dataBank.properties.name}
              style={{
                width: "40rem",
                height: "auto",
                objectFit: "cover",
                borderRight: "2px solid #dc3545",
                filter: "opacity(0.8)",
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";
              }}
            />
            <div className="ms-4 mb-3 d-flex flex-column" style={{ flex: 1 }}>
              <h3 className="card-title text-white pt-3">
                {dataBank.properties.name}
              </h3>

              <p className="card-text text-white mt-4">
                {dataBank.description}
              </p>

              {Object.entries(dataBank.properties).map(([key, value]) => (
                <p key={key} className="card-text text-white">
                  {key} : {value}
                </p>
              ))}

              <button
                type="button"
                className="btn btn-outline-success rounded mt-auto" style={{width:"13rem"}}
                onClick={handleClick}
              >
                   
                Add to favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
export default Databank;
