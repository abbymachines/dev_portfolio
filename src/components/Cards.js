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
    {/* <Card
      title = {cards[0]["title"]}
      body = {cards[0]["body"]}
    /> */}
    {cards.map(function(card, index){
      return <li key={ index }>
        <p>{card["title"]}</p>
        <p>{card["body"]}</p>
      </li>
    })}
    </ul>
  )
}

export default Cards;