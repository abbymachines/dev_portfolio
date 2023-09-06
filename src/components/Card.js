import './Card.css';
import {useState} from 'react';

const Card = ({shortText, extraText, image}) => {
  const [cardNum, setCardNum] = useState(0);

  const increaseCard = () => {
    setCardNum(cardNum + 1);
    console.log(cardNum);
  };

  const decreaseCard = () => {
    setCardNum(cardNum - 1);
    console.log(cardNum);
  }

  const toggleExpandCard = (cardNum) => {
    let cardSizeStyle = 'expanded';

    // cardSizeStyle = 
    if (cardNum > 0) {
      cardSizeStyle = 'expanded';
    } else {
      cardSizeStyle = '';
    }

    // if (cardSizeStyle === 'expanded') {
    //   cardSizeStyle = '';
    // } else {
    //   cardSizeStyle = 'expanded';
    // }

    return `card-box ${cardSizeStyle}`;
  }

  return (
  <section className={toggleExpandCard(cardNum)}>
    <p>{shortText}</p>
    <p>{extraText}</p>
    <p>{image}</p>
    <p>{cardNum}</p>
    <button onClick={increaseCard}>pump it up</button>
    <button onClick={decreaseCard}>turn it down</button>
  </section>)
}

export default Card;