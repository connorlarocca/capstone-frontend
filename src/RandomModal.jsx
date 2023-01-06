import "./Modal.css";

export function RandomModal(props) {
  const handleClickFavorite = () => {
    props.onCreateFavorite(props.randomRestaurant);
  };
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
        <button onClick={handleClickFavorite} type="submit">
          Add to Favorites
        </button>
      </div>
    );
  }
}
