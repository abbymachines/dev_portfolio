import './Card.css';
import ExpandButton from './ExpandButton';
import { useState } from 'react';

function Card(props) {
  // const cardStyle = 'card-box center';

  const [cardStyle, setCardStyle] = useState('card-box center');

  // const styles = ['card-box center', 'card-box center expanded'];

  const expandCard = () => {
    setCardStyle('card-box center expanded')
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