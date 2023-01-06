export function RandomRestaurantsIndex(props) {
  // const handleClick = () => {
  //   props.onDestroyrestaurant(props.restaurant);
  // };
  console.log(props);
  const jwt = localStorage.getItem("jwt");

  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => props.onSelectRandomRestaurant()}
      >
        DECIDE 4 ME!!!
      </button>
    </div>
  );
}
