import './Card.css';

const Card = ({shortText, extraText, image}) => {
  return (
  <section className="card-box">
    <p>{shortText}</p>
    <p>{extraText}</p>
    <p>{image}</p>
  </section>)
}

export default Card;