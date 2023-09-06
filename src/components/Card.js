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

  return (
  <section className="card-box">
    <p>{shortText}</p>
    <p>{extraText}</p>
    <p>{image}</p>
    <p>{cardNum}</p>
    <button onClick={increaseCard}>pump it up</button>
    <button onClick={decreaseCard}>turn it down</button>
  </section>)
}

export default Card;