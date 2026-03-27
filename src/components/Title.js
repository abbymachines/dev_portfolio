import { Link } from "react-router-dom";

function Title() {
  return (
    <header>
      <center>
        <h1 className="website-title">
          <Link to={"/"}>Abby Castillo</Link>
        </h1>
      </center>
      <center className="website-subtitle">software engineer</center>
      <center className="home-links">
        <a href="mailto:abby.machines@gmail.com">email</a> /{" "}
        <a href="https://github.com/abbymachines">GitHub</a> /{" "}
        <a href="https://linkedin.com/in/abbycc">LinkedIn</a> /{" "}
        <a href="https://abbymachines.art/cv">artist C.V.</a>
      </center>
      <center>
        <Link to="/blog">dev blog</Link>
      </center>
    </header>
  );
}

export default Title;
