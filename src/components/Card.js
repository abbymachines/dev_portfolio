import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  const { title, image } = props;
  const slug = encodeURIComponent(title);

  return (
    <Link to={`projects/${slug}`} className="card-box">
      <img src={image} alt={title} className="card-image" />
      <div className="card-title-overlay">
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
