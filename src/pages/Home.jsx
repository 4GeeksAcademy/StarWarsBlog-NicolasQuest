import { useState,useEffect } from "react";
import gifImage from "../assets/img/gif.gif";
import NavbarTop from "../components/NavbarTop.jsx";

export const Home = () => {


  useEffect(() => {
    const globalFetch = async (key, url) => {
      const stored = localStorage.getItem(key);

      try {
        const res = await window.fetch(url)
        if (!res.ok) throw new Error(res.status);
        const data = await res.json();
        localStorage.setItem(key, JSON.stringify(data.result || data.results));
      } catch (error) {
        console.error(`Error globalFetching ${key}:`, error);
      }
    };

    globalFetch("swapi_characters", "https://swapi.tech/api/people");
    globalFetch("swapi_planets", "https://swapi.tech/api/planets");
    globalFetch("swapi_species", "https://swapi.tech/api/species");
    globalFetch("swapi_films", "https://swapi.tech/api/films") ;
    globalFetch("swapi_vehicles", "https://swapi.tech/api/vehicles");
    globalFetch("swapi_starships", "https://swapi.tech/api/starships");
  }, []);
 

  return (
    <div className="mt-5">
        <div className="d-flex justify-content-center selected-home">
         <NavbarTop />
        </div>
        <div className=" d-flex justify-content-center mt-5">
          <img className="w-100" style={{height:"850px"}} src={gifImage} alt="" />
        </div>
    </div>
  );
};


/* 
<img
              src="https://i.redd.it/t7wgqi8220ae1.gif"
              alt="SW GIF"
              className="pt-5"
              style={{width:"140vh"}}
            /> 
            */