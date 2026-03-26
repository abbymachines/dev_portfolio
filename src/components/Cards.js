import Card from "./Card";

function Cards(props) {
  const cards = props.cardsData;

  return (
    <ul className="cardslist-center">
      {cards.map(function (card, index) {
        return (
          <li key={index}>
            <Card
              title={card["title"]}
              image={card["image"]}
              body={card["body"]}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Cards;
