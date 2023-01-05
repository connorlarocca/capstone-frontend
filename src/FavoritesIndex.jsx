export function FavoritesIndex(props) {
  console.log(props);
  return (
    <div id="favorites-index">
      <h1 className="text-center">All Favorites</h1>
      <div className="favorites row">
        {props.restaurants.map((restaurant) => (
          <div className="col-4" key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <div>
              <img
                src={restaurant.image_url}
                className="card-img-top rounded mx-auto d-block"
                alt=""
              />
              <h3>{restaurant.phone_number}</h3>
            </div>
            {/* <h4 className="card-text text-center">{Restaurant.body}</h4> */}
            <div className="d-grid gap-2 mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
