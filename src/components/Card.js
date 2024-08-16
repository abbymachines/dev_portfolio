import './Card.css';
import ExpandButton from './ExpandButton';
import { useState } from 'react';
import Markdown from 'markdown-to-jsx'

function Card(props) {
  // const cardStyle = 'card-box center';
  const body = props.body;
  // const extraText = props.extraText;
  const title = props.title;
  // const isExpanded = props.isExpanded;

  const [isExpanded, setIsExpanded] = useState(true);
  const [cardStyle, setCardStyle] = useState('card-box expanded');

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
      <h2>{props.title}</h2>
      <p><Markdown>{props.body}</Markdown></p>
      {/* <p>{props.extraText}</p> */}
      {/* <p>{props.image}</p> */}
      <ExpandButton clickHandler={expandCard} />
    </div>
  )
}

export default Card;