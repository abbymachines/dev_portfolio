import Card from "./Card";
import Markdown from "markdown-to-jsx";
// import 

function Cards(props) {
  const cards = props.cardsData;

  // for (let i = 0; i < cards.length; i++) {
  //   return <p><Card
  //     body={cards[i]["body"]}
  //     title={cards[i]["title"]}
  //   /></p>
  // }


  return (
    <ul>
    <Card
      title = {cards["wormchat"]["title"]}
      body = {cards["wormchat"]["body"]}
    />
    </ul>
    
    // <ul className="cardslist-center">
    //   <li>
    //   <Card 
    //     mainText={cards[0].mainText}
    //     extraText={cards[0].extraText}
    //     image={cards[0].image}
    //   /> </li>
    //   <li>
    //   <Card 
    //     mainText={cards[1].mainText}
    //     extraText={cards[1].extraText}
    //     image={cards[1].image}
    //   /> </li>
    //   <li>
    //   <Card 
    //     mainText={cards[2].mainText}
    //     extraText={cards[2].extraText}
    //     image={cards[2].image}
    //   /> </li>
    // </ul>
  )
}

export default Cards;