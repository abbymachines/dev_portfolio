function BlogPost(props) {
  const { post } = props;

  return (
    <div>
      <h2 className="blog-post-title">{post.title}</h2>
      <p style={{ color: "#000000", fontSize: "0.85rem" }}>
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      <a href={post.URL} target="_blank" rel="noreferrer">
        Read more →
      </a>{" "}
      (external link)
    </div>
  );
}

export default BlogPost;
