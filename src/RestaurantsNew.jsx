export function RestaurantsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRestaurant(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" />
        </div>
        <div>
          Phone Number: <input name="phone_number" type="text" />
        </div>
        <div>
          Website: <input name="website" type="text" />
        </div>
        <button type="submit">Create Restaurant</button>
      </form>
    </div>
  );
}
