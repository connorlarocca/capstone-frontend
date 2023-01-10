import { useState, useEffect } from "react";
import axios from "axios";

export function FavoritesIndex() {
  const [favorites, setFavorites] = useState([]);
  const [currentId, setCurrentId] = useState([]);

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  // const handleShowFavorite = (favorite) => {
  //   console.log("handleShowFavorite", favorite);
  //   setIsFavoriteShowVisible(true);
  //   setCurrentFavorite(favorite);
  // };

  // const handleCreateFavorite = (params) => {
  //   console.log("handleCreateFavorite", params);
  //   const restaurantsfavorite = { restaurant_id: params.id };
  //   axios
  //     .post("http://localhost:3000/favorites.json", restaurantsfavorite)
  //     .then((response) => {
  //       setFavorites([...favorites, response.data]);
  //     });
  // };
  const handleDestroyFavorite = (favorite) => {
    console.log(favorite);
    axios
      .delete(`http://localhost:3000/favorites/${favorite.id}.json`)
      .then((response) => {
        console.log(response.data);
        setFavorites(favorites.filter((p) => p.id !== favorite.id));
        handleClose();
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
              {/* <p>{favorite.user_id}</p> */}
              <p>{favorite.id}</p>
              {/* <p>{favorite.name}</p> */}
              <button className="btn btn-info" onClick={handleDestroyFavorite}>
                UNFAVORITE
              </button>
            </div>
          ))}
        </div>
        {/* <form>
          <div className="text-center">
            Enter the ID of what you want to unfavorite (DEVELOPMENT FEATURE):
            <input onSubmit={setCurrentId} name="id" type="integer" />
          </div>
        </form> */}
      </div>
    );
  } else {
    return (
      <h2 className="text-center">Please log in to see your favorites.</h2>
    );
  }
}
