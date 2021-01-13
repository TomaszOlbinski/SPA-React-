import React from "react";

const Article = ({ title, author, text }) => {
  const styles = {
    maxHeight: "60vh",
    marginTop: 20,
  };
  return (
    <div style={styles}>
      <h5 style={{ marginBottom: 3, textTransform: "uppercase" }}>{title}</h5>
      <span style={{ display: "block", marginBottom: 10, fontSize: 14 }}>
        {author}
      </span>
      <p style={{ fontSize: 16 }}>{text}</p>
    </div>
  );
};

export default Article;
