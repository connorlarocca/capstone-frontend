// export function RestaurantsShow(props) {
//   const handleSubmit = (restaurant) => {
//     event.preventDefault();
//     const params = new FormData(event.target);
//     console.log("handleUpdateRestaurant", params);
//     props.onUpdateRestaurant(props.restaurant.id, params);
//     event.target.reset();
//     window.location.href = "#";
//   };

//   const handleClick = () => {
//     props.onDestroyRestaurant(props.restaurant);
//   };

//   return (
//     <div id="restaurants-show">
//       <h2>Name: {props.restaurant.name}</h2>
//       <p>Image: {props.restaurant.image_url}</p>
//       <p>Phone Number: {props.restaurant.phone_number}</p>
//       <p>Website: {props.restaurant.website}</p>
//       <form onSubmit={handleSubmit}>
//         {/* <h2>Edit Restaurant</h2>
//         <div>
//           Name:{" "}
//           <input defaultValue={props.restaurant.name} name="name" type="text" />
//         </div>
//         <div>
//           Image URL:{" "}
//           <img
//             defaultValue={props.restaurant.image_url}
//             name="image_url"
//             type="text"
//           />
//         </div>
//         <div>
//           Phone Number:{" "}
//           <input
//             defaultValue={props.restaurant.phone_number}
//             name="phone_number"
//             type="text"
//           />
//         </div>
//         <div>
//           Website:{" "}
//           <input
//             defaultValue={props.restaurant.website}
//             name="website"
//             type="text"
//           />
//         </div> */}
//         {/* <button type="submit">Update Restaurant</button> */}
//       </form>
//       {/* <button onClick={handleClick}>Delete Restaurant</button> */}
//     </div>
//   );
// }
export function RestaurantsShow(props) {
  const handleClickFavorite = () => {
    props.onCreateFavorite(props.restaurant);
  };

  // const handleClick = () => {
  //   props.onDestroyrestaurant(props.restaurant);
  // };

  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    return (
      <div>
        <h1>Restaurant information</h1>
        <h2>{props.restaurant.name}</h2>
        <p>Phone Number: {props.restaurant.phone_number}</p>
        <p>Website: {props.restaurant.website}</p>
        <img src={props.restaurant.image_url} width="300px" height="auto" />

        <button onClick={handleClickFavorite} type="submit">
          Add to Favorites
        </button>
      </div>
    );
  } else {
    return <p>Please log in!</p>;
  }
}
