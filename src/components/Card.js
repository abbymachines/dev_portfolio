import './Card.css';

function Card(props) {
  return (
    <div className='card-box center'>
      <p>{props.mainText}</p>
      <p>{props.extraText}</p>
      <p>{props.image}</p>
    </div>
  )
}

export default Card;