import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Favorites = () => {
  const { type, uid } = useParams();
  const { store } = useGlobalReducer();

  let imgType = "";
  if (type === "people") imgType = "characters";

  const imageFolder = favorite ? (favorite.type === "people" ? "characters" : favorite.type) : "";


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
            {store.favorites.map((fav, index) => (
              <li key={index} className="text-white rounded">
                <img
                  src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${imageFolder}/${favorite.uid}.jpg`}
                  alt={""}
                  style={{ width: "100%", height: "14rem" }}
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

export default Favorites;
