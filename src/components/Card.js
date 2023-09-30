import './Card.css';
import ExpandButton from './ExpandButton';
import { useState } from 'react';

function Card(props) {
  // const cardStyle = 'card-box center';
  const mainText = props.mainText;
  const extraText = props.extraText;
  const image = props.image;
  // const isExpanded = props.isExpanded;

  const [isExpanded, setIsExpanded] = useState(false);
  const [cardStyle, setCardStyle] = useState('card-box');

  const expandCard = () => {
    if (isExpanded === false) {
      setCardStyle('card-box expanded');
      setIsExpanded(true);
    } else {
      setCardStyle('card-box');
      setIsExpanded(false);
    }


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