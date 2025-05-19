import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import storeReducer from "../store";
const SearchBar = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleKeyDown = (e) => {

    const characters = JSON.parse(localStorage.getItem(`swapi_characters`));
    const films = JSON.parse(localStorage.getItem(`swapi_films`));
    const species = JSON.parse(localStorage.getItem(`swapi_species`));
    const vehicles = JSON.parse(localStorage.getItem(`swapi_vehicles`));
    const starsips = JSON.parse(localStorage.getItem(`swapi_starships`));
    const planets = JSON.parse(localStorage.getItem(`swapi_planets`));
    

    const all = [
      ...characters,
      ...films,
      ...species,
      ...vehicles,
      ...starsips,
      ...planets,
    ];

    let found = false;

    if (e.key === "Enter") {
      const parsed = all;
      console.log(parsed);
      
      parsed?.map((item,index) => {
        if (item?.name && typeof item.name === 'string') {
          if (item.name.toLowerCase() === searchTerm.toLowerCase()) {
          found = true;

          if (index <= 9) {
            navigate(`/content-databank/people/${item.uid}`)
          } else if (index >= 10 && index <= 15) {
            navigate(`/content-databank/films/${item.uid}`)
          } else if (index>= 16 && index<= 25) {
            navigate(`/content-databank/species/${item.uid}`)
          } else if (index>= 26 && index<= 35) {
            navigate(`/content-databank/vehicles/${item.uid}`)
          } else if (index>= 36 && index<= 45) {
            navigate(`/content-databank/starships/${item.uid}`)
          } else if (index>= 46 && index<= 55) {
            navigate(`/content-databank/planets/${item.uid}`)
          }
         
          return ;
        }
      }});
      if (!found) {
        alert("Data unknown");
      }
    }

    const value = e.target.value;
    setSearchTerm(value);
  
    // Filtrar en tiempo real
    const filtered = all?.filter(item =>
      item?.name?.toLowerCase().includes(value.toLowerCase())
    );
  
    setFilteredResults(filtered);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search... "
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
