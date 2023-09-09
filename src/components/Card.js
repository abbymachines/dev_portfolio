import './Card.css';

function Card(props) {
  return (
    <div>
      <p>{props.mainText}</p>
      <p>{props.extraText}</p>
    </div>
  )
}

export default Card;