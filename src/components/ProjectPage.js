import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function ProjectPage({ cards }) {
  const { title } = useParams();
  const decoded = decodeURIComponent(title);
  const card = cards.find((c) => c.title === decoded);

  if (!card) {
    return (
      <div className="background">
        <Link to="/">BACK</Link>
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <div className="background">
      <Link to="/">BACK</Link>
      <ReactMarkdown>{card.body}</ReactMarkdown>
    </div>
  );
}

export default ProjectPage;
