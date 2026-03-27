import { useEffect, useState } from "react";
import Title from "./Title";
import "./Blog.css";
import BlogPost from "./BlogPost";

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

  if (loading)
    return (
      <div>
        <Title />
        <p>
          <center>Loading posts...</center>
        </p>
      </div>
    );

  return (
    <div>
      <Title />
      <div className="blog">
        {posts.map((post) => (
          <article key={post.id} style={{ marginBottom: "2rem" }}>
            <BlogPost post={post} />
            <hr />
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
