import axios from "axios";
import { useState, useEffect } from "react";
import { RestaurantsIndex } from "./RestaurantsIndex";
import { Modal } from "./Modal";
import { RestaurantsShow } from "./RestaurantsShow";
import { RandomRestaurantsShow } from "./RandomRestaurantsShow";
import { FavoritesShow } from "./FavoritesShow";
import { FavoritesIndex } from "./FavoritesIndex";

import { RandomModal } from "./RandomModal";
import { RandomRestaurantsIndex } from "./RandomRestaurantsIndex";
import { Link } from "react-router-dom";

export function Home() {
  const [restaurants, setRestaurants] = useState([]);
  // const [randomRestaurant, setRandomRestaurant] = useState([]);
  const [isRestaurantShowVisible, setIsRestaurantShowVisible] = useState(false);
  // const [isRandomRestaurantShowVisible, setIsRandomRestaurantShowVisible] =
  //   useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState({});
  // const [currentRandomRestaurant, setCurrentRandomRestaurant] = useState({});
  const [favorites, setFavorites] = useState([]);
  // const [isFavoritesShowVisible, setIsFavoritesShowVisible] = useState(false);

  const [currentRandomRestaurant, setCurrentRandomRestaurant] = useState({});
  const [isRandomRestaurantShowVisible, setIsRandomRestaurantShowVisible] =
    useState(false);
  const [randomRestaurant, setRandomRestaurant] = useState([]);

  const handleClose = () => {
    console.log("handleClose");
    setIsRestaurantShowVisible(false);
  };

  const handleIndexRestaurants = () => {
    console.log("handleIndexRestaurants");
    axios.get("http://localhost:3000/restaurants.json").then((response) => {
      console.log(response.data);
      setRestaurants(response.data);
    });
  };

  const handleShowRestaurant = (restaurant) => {
    console.log("handleShowRestaurant", restaurant);
    setIsRestaurantShowVisible(true);
    setCurrentRestaurant(restaurant);
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

  useEffect(handleIndexRestaurants, []);
  return (
    <div>
      <RandomRestaurantsIndex />
      <RestaurantsIndex
        restaurants={restaurants}
        onSelectRestaurant={handleShowRestaurant}
      />
      <Modal show={isRestaurantShowVisible} onClose={handleClose}>
        <RestaurantsShow
          restaurant={currentRestaurant}
          onCreateFavorite={handleCreateFavorite}
        />
      </Modal>
    </div>
  );
}
