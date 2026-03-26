import "./Card.css";
import Markdown from "markdown-to-jsx";

function Card(props) {
  const body = props.body;
  const title = props.title;

  return (
    <div className={"card-box"}>
      <h2>{title}</h2>
      <p>
        <Markdown>{body}</Markdown>
      </p>
    </div>
  );
}

export default Card;
