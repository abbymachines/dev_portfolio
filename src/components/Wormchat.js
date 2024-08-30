// import './Card.css';
// import ExpandButton from './ExpandButton';
// import { useState } from 'react';
// import Markdown from 'markdown-to-jsx'

// function Card(props) {
//   // const corpus = props.corpus;
//   // const reply = props.reply;

//   // const [isExpanded, setIsExpanded] = useState(true);
//   const [corpus, setCorpus] = useState("");
//   const order = 1;
//   const [ngrams, setNgrams] = useState({});
//   const [inputTxt, setInputTxt] = useState("");

//   const setCorpus = () => {

//     if (isExpanded === false) {
//       setCardStyle('card-box expanded');
//       setIsExpanded(true);
//     } else {
//       setCardStyle('card-box');
//       setIsExpanded(false);
//     }
//   }

//   return (
//     <div className={cardStyle}>
//       <h2>{props.title}</h2>
//       <p><Markdown>{props.body}</Markdown></p>
//       {/* <p>{props.extraText}</p> */}
//       {/* <p>{props.image}</p> */}
//       {/* <ExpandButton clickHandler={expandCard} /> */}
//     </div>
//   )
// }

// export default Card;