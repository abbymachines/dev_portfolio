import "./Card.css";

function Card(props) {
  const { title, image } = props;

  return (
    <div className="card-box">
      <img src={image} alt={title} className="card-image" />
      <div className="card-title-overlay">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default Card;
