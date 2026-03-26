import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import ProjectPage from "./components/ProjectPage";
import "./App.css";
import "./components/Card.css";
import "./components/Cards.css";

const cards = [
  // {
  //   title: "Contact",
  //   body: `
  // Hello! :) My name is Abby Castillo.

  // I am a full-stack software engineer and interdisciplinary artist based in Portland, OR.

  // 💌 [**email**](mailto:abby.machines@gmail.com)

  // 👩🏻‍💻 [**dev blog**](https://abbycastillodev.wordpress.com)

  // 🐈‍⬛ [**GitHub**](https://github.com/abbymachines)

  // 💼 [**LinkedIn**](https://www.linkedin.com/in/abbycc/)

  // 🏆 [**Artist C.V.**](https://abbymachines.art/cv)
  //   `,
  // },
  {
    title: "IPRC Zine Library",
    image: "/assets/thumbnails/zine_library.png",
    body: `
Online catalog for the [IPRC Zine Library](https://www.iprc.org/zine-library).
    `,
  },
  {
    title: "realgirl.online",
    image: "/assets/thumbnails/realgirl_online.png",
    body: `
![realgirl.online screenshot](/assets/realgirl_online.png)

[realgirl.online](https://realgirl.online) is a webzine, an experiment in getting lost and finding myself again.
      `,
  },
  {
    title: "A (AR video series)",
    image: "/assets/thumbnails/A_AR videos.png",
    body: `
'A' is a series of AR videos made with Meta Spark Studio. Part of a 2023 Precipice Fund grant. Videos online at [TikTok](https://tiktok.com/@abbymachines).
    `,
  },
  {
    title: "Tama Habits",
    image: "/assets/tamahabits0.png",
    body: `
**Tama Habits** is a habit tracker attached to a tamagotchi-style virtual pet. A demo of this app was first developed as my capstone project at the Ada Developers Academy.

![tama habits screenshot](/assets/tamahabits0.png)
    `,
  },
  {
    title: "The Extent of Our Knowledge",
    image: "/assets/thumbnails/the_extent_of_our_knowledge.png",
    body: `
Data visualization/sonification made with MAX M/S/P. Created as a project during the Creative Coding & Immersive Technologies program at Portland Community College. Documents weekly COVID deaths from 2020-2022 as audio and visuals. [Video available on YouTube.](https://www.youtube.com/watch?v=xNiid90HxCQ)
    `,
  },
  {
    title: "wormchat",
    image: "/assets/thumbnails/wormchat.png",
    body: `
  ![screenshot of wormchat](/assets/wormchat0.png)

Part of **One Thousand Machines v1.1**.

[You can see the source code (along with comments) at my artist website.](https://abbymachines.art/A/OneThousandMachines_v1-1/wormchat_v1/sketch.js)
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
  //   {
  //     title: "Education",
  //     image: "/assets/tamahabits0.png",
  //     body: `
  // **Ada Developers Academy**, full-stack web development

  // **Portland Community College**, Creative Coding & Immersive Technologies.

  // **Reed College**, Anthropology
  //     `,
  //   },
];

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="background">
            <center>
              <h1 className="website-title">Abby Castillo</h1>
            </center>
            <center className="website-subtitle">software engineer</center>
            <Cards cardsData={cards} />
          </div>
        }
      />
      <Route path="/projects/:title" element={<ProjectPage cards={cards} />} />
    </Routes>
  );
}

export default App;
