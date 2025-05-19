const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

export const initialStore = () => {
  return {
    message: null,
    favorites: savedFavorites,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    // porque se recomienda hacer un useEffect fuera de local storage y no hacer el update desde el reducer?

    case "add_favorites":
      const updatedFavorites = [...store.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return {
        ...store,
        favorites: updatedFavorites,
      };
    case "delete_all_favorites":
      localStorage.setItem("favorites", JSON.stringify([]));
      return {
        ...store,
        favorites: [],
      };

      case "delete_favorites":
        
        const removeFavorite = store.favorites.filter(item => item && item !== action.payload);
      
        localStorage.setItem("favorites", JSON.stringify(removeFavorite));
      
        return {
          ...store,
          favorites: removeFavorite
        }

    default:
      throw Error("Unknown action.");
  }
}
