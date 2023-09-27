import './Card.css';
import ExpandButton from './ExpandButton';

function Card(props) {
  function expandCard() {
    console.log('this button will expand the card when i figure out how to do that');
  }

  return (
    <div className='card-box center'>
      <p>{props.mainText}</p>
      <p>{props.extraText}</p>
      <p>{props.image}</p>
      <ExpandButton clickFunction={expandCard} />
    </div>
  )
}

export default Card;