export function FavoritesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.OnCreateFavorite(params, () => event.target.reset());
  };
}