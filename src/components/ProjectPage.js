import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./ProjectPage.css";
import Title from "./Title";

function ProjectPage({ cards }) {
  const { title } = useParams();
  const decoded = decodeURIComponent(title);
  const card = cards.find((c) => c.title === decoded);

  if (!card) {
    return (
      <div className="project-page">
        <Link to="/">BACK</Link>
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Title />
      <div className="project-page">
        <Link to="/">BACK</Link>
        {card.component ? (
          card.component
        ) : (
          <ReactMarkdown>{card.body}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
