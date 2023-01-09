import { useState, useEffect } from "react";
import axios from "axios";

export function FavoritesIndex(props) {
  const [favorites, setFavorites] = useState([]);

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  const handleShowFavorite = (favorite) => {
    console.log("handleShowFavorite", favorite);
    setIsFavoriteShowVisible(true);
    setCurrentFavorite(favorite);
  };

  const handleDestroyFavorite = (favorite) => {
    console.log("handleDestroyfavorite", favorite);
    axios
      .delete(`http://localhost:3000/favorites/${favorite.id}.json`)
      .then((response) => {
        setfavorites(
          favorites.filter((favorite) => favorite.id !== favorite.id)
        );
        handleClose();
      });
  };

  const handleCreateFavorite = (params) => {
    console.log("handleCreateFavorite", params);
    const restaurantsfavorite = { restaurant_id: params.id };
    axios
      .post("http://localhost:3000/favorites.json", restaurantsfavorite)
      .then((response) => {
        setFavorites([...favorites, response.data]);
      });
  };

  useEffect(handleIndexFavorites, []);

  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    return (
      <div id="favorites-index">
        <h1 className="text-center">Your Favorites</h1>
        <div className="row">
          {favorites.map((favorite) => (
            <div className="col-4" key={favorite.id}>
              <p>{favorite.user_id}</p>
              <p>{favorite.restaurant_id}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <h2 className="text-center">Please log in to see your favorites.</h2>
    );
  }
}
