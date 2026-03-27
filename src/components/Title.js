import { Link } from "react-router-dom";
import "./Title.css";

function Title() {
  return (
    <header className="title-header">
      <div className="title-content">
        <center>
          <h1 className="website-title">
            <Link to={"/"}>ABBY CASTILLO</Link>
          </h1>
        </center>
        <center className="website-subtitle">software engineer</center>
        <br />
        <center className="home-links">
          (external links: <a href="mailto:abby.machines@gmail.com">email</a> /{" "}
          <a href="https://github.com/abbymachines">GitHub</a> /{" "}
          <a href="https://linkedin.com/in/abbycc">LinkedIn</a> /{" "}
          <a href="https://abbymachines.art/cv">artist C.V.</a>)
        </center>
        <br></br>
        <center>
          <Link to="/blog">BLOG</Link>
        </center>
      </div>
    </header>
  );
}

export default Title;
