export function FavoritesIndex(props) {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    return (
      // <div id="favorites-index">
      //   <h1 className="text-center">Your Favorites</h1>

      //   <div className="row">
      //     {props.favorites.map((favorite) => (
      //       <div className="col-4" key={favorite.id}>
      //         <p>{favorite.name}</p>
      //         <button onClick={() => props.onShowFavorite(favorite)}>
      //           More info
      //         </button>
      //       </div>
      //     ))}
      //   </div>
      // </div>
      <div>
        <h1>All favorites</h1>
        {props.favorites.map((favorite) => (
          <div key={favorite.id}>
            <h2>{favorite.restaurant_id}</h2>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <h2 className="text-center">Please log in to see your favorites.</h2>
    );
  }
}
