export function FavoritesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFavorite(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Favorite</h1>
      <form onSubmit={handleSubmit}>
        <div>
          User <input name="user_id" type="integer" />
        </div>
        <div>
          Restaurant: <input name="restaurant_id" type="integer" />
        </div>
        <button type="submit">Create favorite</button>
      </form>
    </div>
  );
}
