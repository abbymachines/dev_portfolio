// import logo from './logo.svg';
// import Card from './components/Card';
import Cards from './components/Cards';
import Pet from './components/vpet/Pet';
import './App.css';
import './components/Card.css';
import './components/Cards.css';

// const cards = [
//   {
//     mainText: "Hello! :) My name is Abby Castillo. I am a software developer and interdisciplinary artist based in Portland, OR.",
//     extraText: "email: [abby.machines@gmail.com] / linkedin: [https://linkedin.com/in/abbycc] / artist CV: [https://abbymachines.art]",
//     image: "[ IMAGE ]",
//     isExpanded: false,
//   },
//   {
//     mainText: "Habit V-Pet is this little thing i'm working on :3",
//     extraText: "it's an app, if u can believe it or not",
//     image: "[ IMAGE ]",
//     isExpanded: false,
//   },
//   {
//     mainText: "There's this idea for a trading card collection app i've had knocking around in my head",
//     extraText: "mayhap i shall buildeth it one day",
//     image: "[ IMAGE ]",
//     isExpanded: false,
//   }
// ];

const cards = [
  {
    "title": "Contact",
    "body": `
  Hello! :) My name is Abby Castillo.

  I am a full-stack software engineer and interdisciplinary artist based in Portland, OR.

  💌 **email**: abby.machines@gmail.com

  👩🏻‍💻 **dev blog**: https://abbycastillodev.wordpress.com

  🐈‍⬛ **GitHub**: https://github.com/abbymachines
  
  💼 **LinkedIn**: https://www.linkedin.com/in/abbycc/
  
  🏆 **Artist C.V.**: https://abbymachines.art/cv
    `
  },
//   {
//     "title": "Skills",
//     "body": `
// | LANGUAGES | FRONT-END |
// | --- | --- |
// | Python ![Python](assets/skills_icons/python.png) | Flutter ![Flutter](assets/skills_icons/flutter.png) |
// | Dart ![Dart](assets/skills_icons/dart.png) | React.js |
// | JavaScript | HTML |
// | Java | CSS |
// | Max/MSP | Processing |
// | | P5 |
          

// | BACK-END | OTHER SKILLS |
// | --- | --- |
// | Ruby on Rails | REST APIs |
// | Flask | |
// | PostgreSQL | Time/Space Complexity Analysis (Big O) |
// | Firebase | microcontrollers (Arduino, Teensy) |
// | SQLAlchemy | Git & GitHub |
// |  | app deployment |
// | | test-driven development (Pytest) |
// | | Jupyter Notebooks |

// | CREATIVE | SaaS |
// | --- | --- |
// | Ableton Live | Neon CRM | Jira |
// | Figma | Mailchimp |
// | Affinity Suite (Photo, Designer, Publisher) | Asana |
// | Adobe Suite (Photoshop, Illustrator, InDesign) | Zoom |
// | DaVinci Resolve | Google Workspaces | Canva |
//     `
//   },
  {
    "title": "A (AR video series)",
    "body": `
'A' is a series of AR videos made with Meta Spark Studio. Part of a 2023 Precipice Fund grant. Videos online at [TikTok](https://tiktok.com/@abbymachines).
    `
  },
  {
    "title": "Tama Habits",
    "body": `
**Tama Habits** is a habit tracker attached to a tamagotchi-style virtual pet. A demo of this app was first developed as my capstone project at the Ada Developers Academy. It is currently in development using **Flutter** for **Android**, **iOS**, and the **web**.

The app allows you to keep a list of habits and track their completion over time.

When habits are incomplete, the pet gets hungry and sick. Completing habits feeds the pet and makes it happier.

![tama habits screenshot](/assets/tamahabits0.png)
    `
  },
  {
    "title": "AbbyCastillo.dev",
    "body": `
The website you are currently visiting. :) Developed in **React.js**.
    `
  },
  {
    "title": "The Extent of Our Knowledge",
    "body": `
Data visualization/sonification made with MAX M/S/P. Created as a project during the Creative Coding & Immersive Technologies program at Portland Community College. Documents weekly COVID deaths from 2020-2022 as audio and visuals. [Video available on YouTube.](https://www.youtube.com/watch?v=xNiid90HxCQ)
    `
  },
  {
    "title": "wormchat",
    "body": `
  ![screenshot of wormchat](/assets/wormchat0.png)

Part of **One Thousand Machines v1.1**. Excerpted [from abbymachines.art](https://abbymachines.art/A/OneThousandMachines_v1-1/): *2022.5.2. This one is in lieu of my April report. I thought this time I would just embed wormchat (v1), my first attempt at an interactive chatbot. Building this has taught me a bit more about Markov chains, though I am still trying to wrap my head around them. You can see the source code (along with comments) at the following link: https://abbymachines.art/A/OneThousandMachines_v1-1/wormchat_v1/sketch.js.*
    `
  },
  {
    "title": "Education",
    "body": `
**Ada Developers Academy**, full-stack web development

**Portland Community College**, Creative Coding & Immersive Technologies.

**Reed College**, Anthropology
    `
  }
];

function App() {
  return (
    <div className='background'>
      {/* <Pet /> */}
      <center><h1 className='main-title'>AbbyCastillo.dev</h1></center>
      <Cards cardsData={cards} />
    </div>
    
  );
}

export default App;
