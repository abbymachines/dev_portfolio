// import logo from './logo.svg';
// import Card from './components/Card';
import Cards from './components/Cards';
import './App.css';
import './components/Card.css';
import './components/Cards.css';

const cards = [
  {
    mainText: "Hello! :) My name is Abby Castillo. I am a software developer and interdisciplinary artist based in Portland, OR.",
    extraText: "I'm very smart in fact and I have lots of great ideas.",
    image: "[ IMAGE ]",
    isExpanded: false,
  },
  {
    mainText: "Habit V-Pet is this little thing i'm working on :3",
    extraText: "it's an app, if u can believe it or not",
    image: "[ IMAGE ]",
    isExpanded: false,
  },
  {
    mainText: "There's this idea for a trading card collection app i've had knocking around in my head",
    extraText: "mayhap i shall buildeth it one day",
    image: "[ IMAGE ]",
    isExpanded: false,
  }
];

function App() {
  return (
    <div className='background'>
      <Cards cardsData={cards} />
    </div>
    
  );
}

export default App;
