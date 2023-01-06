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

export function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [isRestaurantShowVisible, setIsRestaurantShowVisible] = useState(false);
  const [isRandomRestaurantShowVisible, setIsRandomRestaurantShowVisible] =
    useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState({});
  const [currentRandomRestaurant, setCurrentRandomRestaurant] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesShowVisible, setIsFavoritesShowVisible] = useState(false);

  const handleIndexRestaurants = () => {
    console.log("handleIndexRestaurants");
    axios.get("http://localhost:3000/restaurants.json").then((response) => {
      console.log(response.data);
      setRestaurants(response.data);
    });
  };

  // const handleIndexRandomRestaurants = () => {
  //   console.log("handleRandomButton");
  //   axios.get("http://localhost:3000/random.json").then((response) => {
  //     console.log(response.data);
  //     setRandomRestaurants(response.data);
  //   });
  // };

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

  const handleShowRandomRestaurant = () => {
    console.log("handleShowRandomRestaurant");
    setIsRandomRestaurantShowVisible(true);
    axios.get("http://localhost:3000/random.json").then((response) => {
      console.log(response.data);
      setCurrentRandomRestaurant(response.data);
      console.log("Your random restaurant is:", currentRandomRestaurant);
    });
  };

  // const handleShowRandomRestaurant = (randomRestaurant) => {
  //   console.log("handleShowRandomRestaurant", randomRestaurant);
  //   axios.get("http://localhost:3000/random.json").then((response) => {
  //     console.log(response.data);
  //     setRandomRestaurant(response.data);
  //   });
  //   setIsRandomRestaurantShowVisible(true);
  //   setCurrentRandomRestaurant(randomRestaurant);
  // };

  // const handleUpdateRestaurant = (id, params, successCallback) => {
  //   console.log("handleUpdateRestaurant", params);
  //   axios
  //     .patch(`http://localhost:3000/restaurants/${id}.json`, params)
  //     .then((response) => {
  //       setRestaurants(
  //         restaurants.map((restaurant) => {
  //           if (restaurant.id === response.data.id) {
  //             return response.data;
  //           } else {
  //             return restaurant;
  //           }
  //         })
  //       );
  //       successCallback();
  //       handleClose();
  //     });
  // };

  const handleClose = () => {
    console.log("handleClose");
    setIsRestaurantShowVisible(false);
  };

  // const handleDestroyRestaurant = (restaurant) => {
  //   console.log("handleDestroyRestaurant", restaurant);
  //   axios
  //     .delete(`http://localhost:3000/restaurants/${restaurant.id}.json`)
  //     .then((response) => {
  //       setRestaurants(restaurants.filter((p) => p.id !== restaurant.id));
  //       handleClose();
  //     });
  // };
  const handleCreateFavorite = (params) => {
    console.log("handleCreateFavorite", params);
    const restaurantsfavorite = { restaurant_id: params.id };
    axios
      .post("http://localhost:3000/favorites.json", restaurantsfavorite)
      .then((response) => {
        setFavorites([...favorites, response.data]);
      });
  };

  // const handleIndexFavorites = () => {
  //   console.log("handleIndexFavorites");
  //   axios.get("http://localhost:3000/favorites.json").then((response) => {
  //     console.log(response.data);
  //     setFavorites(response.data);
  //   });
  // };

  // const handleShowFavorite = (favorite) => {
  //   console.log("handleShowFavorite", favorite);
  //   setIsFavoritesShowVisible(true);
  //   setCurrentFavorite(favorite);
  // };

  // const handleDestroyFavorite = (favorite) => {
  //   console.log("handleDestroyfavorite", favorite);
  //   axios
  //     .delete(`http://localhost:3000/favorites/${favorite.id}.json`)
  //     .then((response) => {
  //       setfavorites(
  //         favorites.filter((favorite) => favorite.id !== favorite.id)
  //       );
  //       handleClose();
  //     });
  // };

  useEffect(handleIndexRestaurants, []);
  return (
    <div>
      <RandomRestaurantsIndex
        // randomRestaurants={randomRestaurants}
        onSelectRandomRestaurant={handleShowRandomRestaurant}
      />
      {/* <RandomModal show={isRandomRestaurantShowVisible} onClose={handleClose}>
        <RandomRestaurantsShow
          randomRestaurant={currentRandomRestaurant}
          onCreateFavorite={handleCreateFavorite}
        />
      </RandomModal> */}
      <RestaurantsIndex
        restaurants={restaurants}
        onSelectRestaurant={handleShowRestaurant}
      />
      <Modal show={isRestaurantShowVisible} onClose={handleClose}>
        <RestaurantsShow
          restaurant={currentRestaurant}
          // onUpdateRestaurant={handleUpdateRestaurant}
          // onDestroyRestaurant={handleDestroyRestaurant}
          onCreateFavorite={handleCreateFavorite}
        />
      </Modal>
      {/* <FavoritesIndex
        favorites={favorites}
        onShowFavorite={handleShowFavorite}
      />{" "} */}

      {/* <Modal show={isFavoritesShowVisible} onClose={handleClose}>
        <FavoritesShow onDestroyFavorite={handleDestroyFavorite} />
      </Modal> */}
    </div>
  );
}
