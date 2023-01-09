import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function RandomRestaurantsIndex(props) {
  // const handleClick = () => {
  //   props.onDestroyrestaurant(props.restaurant);
  // };

  const [currentRandomRestaurant, setCurrentRandomRestaurant] = useState({});
  const [isRandomRestaurantShowVisible, setIsRandomRestaurantShowVisible] =
    useState(false);
  const [randomRestaurant, setRandomRestaurant] = useState([]);

  const handleIndexRandomRestaurants = () => {
    console.log("handleIndexRandomRestaurants");
    axios.get("http://localhost:3000/random.json").then((response) => {
      console.log(response.data);
      setRandomRestaurant(response.data);
    });
  };

  const handleShowRandomRestaurant = (randomRestaurant) => {
    // console.log("handleShowRandomRestaurant");
    // axios.get("http://localhost:3000/random.json").then((response) => {
    setIsRandomRestaurantShowVisible(true);
    console.log(response.data);
    setCurrentRandomRestaurant(randomRestaurant);
    console.log("Your random restaurant is:", currentRandomRestaurant);
    // });
  };

  const handleHideRandomRestaurant = () => {
    setIsRandomRestaurantShowVisible(false);
  };

  console.log(props);
  const jwt = localStorage.getItem("jwt");

  return (
    // <div>
    //   <div id="random_restaurants-index">
    //     <h1>Your Random Restaurant:</h1>
    //     {randomRestaurants.map((randomRestaurant) => (
    //       <div key={randomRestaurant.name}>
    //         <div className="card col-6">
    //           <img
    //             src={props.randomRestaurant.image_url}
    //             className="d-block w-30"
    //             alt="..."
    //           />
    //           {/* <h5>{fossilArea.state_name}</h5>
    //           <p>{fossilArea.area_name}</p> */}
    //           <Link className="btn btn-outline-info" to={`/random`}>
    //             {" "}
    //             More info{" "}
    //           </Link>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div>
      <Link className="btn btn-success btn-large" to={`/random`}>
        {" "}
        DECIDE 4 ME!!!{" "}
      </Link>
    </div>
  );
}
