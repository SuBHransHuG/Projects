import React from 'react';
import './PostList.css'; // Import CSS file for styling

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      <h2 className="post-list-title">Latest Posts</h2>
      <div className="post-items">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-info">By {post.author} on {post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
