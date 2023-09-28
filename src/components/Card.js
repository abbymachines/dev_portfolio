import './Card.css';
import ExpandButton from './ExpandButton';

function Card(props) {
  const cardStyle = 'card-box center';

  function expandCard() {
    console.log('this button will expand the card when i figure out how to do that');
  }

  return (
    <div className={cardStyle}>
      <p>{props.mainText}</p>
      <p>{props.extraText}</p>
      <p>{props.image}</p>
      <ExpandButton clickHandler={expandCard} />
    </div>
  )
}

export default Card;