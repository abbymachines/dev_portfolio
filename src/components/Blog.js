import { useEffect, useState } from "react";
import Title from "./Title";
import "./Blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://public-api.wordpress.com/rest/v1.1/sites/abbycastillodev.wordpress.com/posts/",
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.posts && Array.isArray(data.posts)) {
          setPosts(data.posts);
        } else {
          console.error("Unexpected API response:", data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div className="blog">
      <Title />
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "1rem" }}>
        {posts.map((post) => (
          <article key={post.id} style={{ marginBottom: "2rem" }}>
            <h2>{post.title}</h2>
            <p style={{ color: "#888", fontSize: "0.85rem" }}>
              {new Date(post.date).toLocaleDateString()}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            <a href={post.URL} target="_blank" rel="noreferrer">
              Read more →
            </a>
            <hr />
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
