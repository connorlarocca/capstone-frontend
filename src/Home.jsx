import axios from "axios";
import { useState, useEffect } from "react";
import { RestaurantsIndex } from "./RestaurantsIndex";

import { Modal } from "./Modal";
import { RestaurantsShow } from "./RestaurantsShow";
import { Randomizer } from "./Randomizer";
import { FavoritesNew } from "./FavoritesNew";
import { FavoritesIndex } from "./FavoritesIndex";

export function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [isRestaurantShowVisible, setIsRestaurantShowVisible] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState({});
  const [favorites, setFavorites] = useState([]);

  const handleIndexRestaurants = () => {
    console.log("handleIndexRestaurants");
    axios.get("http://localhost:3000/restaurants.json").then((response) => {
      console.log(response.data);
      setRestaurants(response.data);
    });
  };

  // const handleCreateRestaurant = (params, successCallback) => {
  //   console.log("handleCreateRestaurant", params);
  //   axios
  //     .post("http://localhost:3000/restaurants.json", params)
  //     .then((response) => {
  //       setRestaurants([...restaurants, response.data]);
  //       successCallback();
  //     });
  // };

  const handleShowRestaurant = (restaurant) => {
    console.log("handleShowRestaurant", restaurant);
    setIsRestaurantShowVisible(true);
    setCurrentRestaurant(restaurant);
  };

  const handleUpdateRestaurant = (id, params, successCallback) => {
    console.log("handleUpdateRestaurant", params);
    axios
      .patch(`http://localhost:3000/restaurants/${id}.json`, params)
      .then((response) => {
        setRestaurants(
          restaurants.map((restaurant) => {
            if (restaurant.id === response.data.id) {
              return response.data;
            } else {
              return restaurant;
            }
          })
        );
        successCallback();
        handleClose();
      });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsRestaurantShowVisible(false);
  };

  const handleDestroyRestaurant = (restaurant) => {
    console.log("handleDestroyRestaurant", restaurant);
    axios
      .delete(`http://localhost:3000/restaurants/${restaurant.id}.json`)
      .then((response) => {
        setRestaurants(restaurants.filter((p) => p.id !== restaurant.id));
        handleClose();
      });
  };
  const handleCreateFavorite = (params, successCallback) => {
    console.log("handleCreateFavorite", params);
    const restaurantsfavorite = { restaurant_id: params.id };
    axios
      .post("http://localhost:3000/favorites.json", restaurantsfavorite)
      .then((response) => {
        setFavorites([...favorites, response.data]);
        successCallback();
      });
  };

  useEffect(handleIndexRestaurants, []);
  return (
    <div>
      {/* <RestaurantsNew onCreateRestaurant={handleCreateRestaurant} /> */}
      <Randomizer />
      <RestaurantsIndex
        restaurants={restaurants}
        onSelectRestaurant={handleShowRestaurant}
      />
      <Modal show={isRestaurantShowVisible} onClose={handleClose}>
        <RestaurantsShow
          restaurant={currentRestaurant}
          onUpdateRestaurant={handleUpdateRestaurant}
          onDestroyRestaurant={handleDestroyRestaurant}
          onCreateFavorite={handleCreateFavorite}
        />
      </Modal>
      {/* <FavoritesIndex /> */}
    </div>
  );
}
