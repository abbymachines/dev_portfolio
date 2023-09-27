import './Card.css';
import ExpandButton from './ExpandButton';

function Card(props) {
  return (
    <div className='card-box center'>
      <p>{props.mainText}</p>
      <p>{props.extraText}</p>
      <p>{props.image}</p>
      <ExpandButton />
    </div>
  )
}

export default Card;