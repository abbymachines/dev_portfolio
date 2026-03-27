import { Routes, Route, Link } from "react-router-dom";
import Cards from "./components/Cards";
import ProjectPage from "./components/ProjectPage";
import "./App.css";
import "./components/Card.css";
import "./components/Cards.css";
import Blog from "./components/Blog";
import Title from "./components/Title";

// project imports
import RealGirlOnline from "./components/projects/RealGirlOnline";

const cards = [
  {
    title: "IPRC Zine Library Catalog",
    image: "/assets/thumbnails/zine_library.png",
    body: `
Work in progress. Online catalog for the [IPRC Zine Library](https://www.iprc.org/zine-library).

Full-stack application built with WeWeb for the frontend, Xano for the backend, and Cloudflare for image hosting.
    `,
  },
  {
    title: "realgirl.online",
    image: "/assets/thumbnails/realgirl_online.png",
    body: `
# realgirl.online

![realgirl.online screenshot](/assets/thumbnails/realgirl_online.png)

[realgirl.online](https://realgirl.online) is a webzine, an experiment in getting lost and finding myself again.
      `,
    component: <RealGirlOnline />,
  },
  {
    title: "A (AR video series)",
    image: "/assets/thumbnails/A_AR videos.png",
    body: `
'A' is a series of AR videos made with Meta Spark Studio.

Part of a 2023 Precipice Fund grant. Videos online at [TikTok](https://tiktok.com/@abbymachines).
    `,
  },
  {
    title: "Tama Habits",
    image: "/assets/tamahabits0.png",
    body: `
**Tama Habits** is a habit tracker attached to a tamagotchi-style virtual pet. A demo of this app was first developed as my capstone project at the Ada Developers Academy.

![tama habits screenshot](/assets/tamahabits0.png)

Built with Flutter as a cross-platform app.
    `,
  },
  {
    title: "The Extent of Our Knowledge",
    image: "/assets/thumbnails/the_extent_of_our_knowledge.png",
    body: `
Data visualization/sonification made with MAX M/S/P. Created as a project during the Creative Coding & Immersive Technologies program at Portland Community College. Documents weekly COVID deaths from 2020-2022 as audio and visuals. 

[Video available on YouTube.](https://www.youtube.com/watch?v=xNiid90HxCQ)
    `,
  },
  {
    title: "wormchat",
    image: "/assets/thumbnails/wormchat.png",
    body: `
  ![screenshot of wormchat](/assets/wormchat0.png)

[wormchat](https://abbymachines.art/A/OneThousandMachines_v1-1/wormchat_v1/) is a simple experimental chatbot. The concept is that you are speaking to a small worm with a limited grasp of language. The chatbot uses Markov chains to transform inputted text, and speaks its messages out loud using the user's system voice.
    `,
  },
  {
    title: "A Series of Interconnected Delights",
    image: "/assets/thumbnails/delightsposter.png",
    body: `
[Capstone group show](https://www.pcc.edu/galleries/2022/06/14/a-series-of-interconnected-delights-a-collaborative-project-by-the-2022-pcc-creative-coding-capstone-class/) for the Creative Coding & Immersive Technologies program at Portland Community College.

My contribution made use of the Ableton Live API to launch randomly-selected pre-arranged clips from a set of different virtual instruments. This script was routed through physical buttons powered by Teensyduino microprocessors.
    `,
  },
];

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="background">
            <Title />
            {/* <center className="projects-heading">
              <i>PROJECTS</i>
            </center> */}
            <Cards cardsData={cards} />
          </div>
        }
      />
      <Route path="/projects/:title" element={<ProjectPage cards={cards} />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
