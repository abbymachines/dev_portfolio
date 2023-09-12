import Card from "./Card";

function Cards(props) {
  const cards = props.cardsData;

  return (
    <div>
      <Card 
        mainText={cards[0].mainText}
        extraText={cards[0].extraText}
        image={cards[0].image}
      />
      <Card 
        mainText={cards[1].mainText}
        extraText={cards[1].extraText}
        image={cards[1].image}
      />
      <Card 
        mainText={cards[2].mainText}
        extraText={cards[2].extraText}
        image={cards[2].image}
      />
    </div>
  )
}

export default Cards;