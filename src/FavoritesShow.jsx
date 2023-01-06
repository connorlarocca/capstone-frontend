export function FavoritesShow(props) {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const params = new FormData(event.target);
  //   props.onUpdateHike(props.favorite.id, params, () => event.target.reset());
  // };

  const handleClick = () => {
    props.onDestroyFavorite(props.favorite);
  };

  return (
    <div>
      <h1>Your Favorites</h1>
      <p>Name: {props.favorite.user_id}</p>
      <p>Restaurant: {props.favorite.restaurant_id}</p>
      <button onClick={handleClick}>Remove Favorite</button>
    </div>
  );
}
