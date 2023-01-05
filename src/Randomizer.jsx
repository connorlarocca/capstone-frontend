import axios from "axios";

export function Randomizer() {
  const handleSubmit = (event) => {
    const restaurants = axios.get("http://localhost:3000/restaurants.json");

    const random = Math.floor(Math.random() * restaurants.length);

    // const random_restaurant = axios.get(
    //   `http://localhost:3000/restaurants/${random}.json`
    // );
    event.preventDefault();
    // const params = new FormData(event.target);
    // console.log("handleRandomizer", params);
    // props.onRandomizer(props.restaurant.id);
    // event.target.reset();
    window.location.href = `http://localhost:3000/restaurants/${random}.json`;
  };

  return (
    <button className="btn btn-success" onClick={handleSubmit}>
      DECIDE 4 ME!!!
    </button>
  );

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const params = new FormData(event.target);
  //   console.log("handleUpdateRestaurant", params);
  //   props.onUpdateRestaurant(props.restaurant.id, params);
  //   event.target.reset();
  //   window.location.href = "#";
  // };

  // const handleClick = () => {
  //   props.onDestroyRestaurant(props.restaurant);
  // };

  // return (
  //   <div id="restaurants-show">
  //     <h2>Name: {props.restaurant.name}</h2>
  //     <p>Image: {props.restaurant.image_url}</p>
  //     <p>Phone Number: {props.restaurant.phone_number}</p>
  //     <p>Website: {props.restaurant.website}</p>
  //     <form onSubmit={handleSubmit}>
  //       {/* <h2>Edit Restaurant</h2>
  //       <div>
  //         Name:{" "}
  //         <input defaultValue={props.restaurant.name} name="name" type="text" />
  //       </div>
  //       <div>
  //         Image URL:{" "}
  //         <img
  //           defaultValue={props.restaurant.image_url}
  //           name="image_url"
  //           type="text"
  //         />
  //       </div>
  //       <div>
  //         Phone Number:{" "}
  //         <input
  //           defaultValue={props.restaurant.phone_number}
  //           name="phone_number"
  //           type="text"
  //         />
  //       </div>
  //       <div>
  //         Website:{" "}
  //         <input
  //           defaultValue={props.restaurant.website}
  //           name="website"
  //           type="text"
  //         />
  //       </div> */}
  //       {/* <button type="submit">Update Restaurant</button> */}
  //     </form>
  //     {/* <button onClick={handleClick}>Delete Restaurant</button> */}
  //   </div>
}
