export function RandomRestaurantsShow(props) {
  console.log(props);

  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    return (
      <div>
        <h1>Restaurant Information</h1>
        <h2>{props.randomRestaurant.name}</h2>
        <p>Phone Number: {props.randomRestaurant.phone_number}</p>
        <p>Website: {props.randomRestaurant.website}</p>
        <img
          src={props.randomRestaurant.image_url}
          width="300px"
          height="auto"
        />

        <button onClick={handleClickFavorite} type="submit">
          Add to Favorites
        </button>
      </div>
    );
  } else {
    return (
      <h1 className="text-center">
        Please log in to use the DECIDE4ME functionality!
      </h1>
    );
  }
}
