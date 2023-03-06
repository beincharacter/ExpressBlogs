import React, { useState } from 'react';
import "./PostCard.scss";
import blog_data from '../../assets/blog.json';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import { BiDotsHorizontal } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const PostCard = (props) => {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState(null);

  const blog = props.blog
  const comments = props.comments;

  const handlePostClick = (postId) => {
    if (selectedPost === postId) {
      setSelectedPost(null);
    } else {
      setSelectedPost(postId);
    }
  };

  const handleShowMoreClick = (e, post) => {
    e.stopPropagation();
    navigate("/post", {
      state: post
    })
  };

  return (
    <div className="post_card">
      {blog.map((post) => (
        <div key={post.id} className="post" onClick={(e) => handleShowMoreClick(e, post)}>
          <div className="post-header">
            <h2 className="post-header-title">{post.title}</h2>
            <h2 className="post-header-actions"><BiDotsHorizontal  className='edit-delete'/></h2>
          </div>
            <div className="post-header-title">{post.subtitle}</div>
          <div className="post-image">
            <img src={post.img} alt={post.title} />
          </div>
          <div className="post-details">
            <p className="post-body">{post.body}</p>
            <div className="post-actions">
              <div className="post-likes">
                <FaThumbsUp /> {post.likes.length}
              </div>
              <div className="post-comments">
                <FaComment  onClick={() => handlePostClick(post.id)} /> {comments.find((c) => c.id === post.id)?.comments.length || 0}
              </div>
            </div>
            <div className="add-comment">
              <input type="text" placeholder='comment...' />
            </div>
            {selectedPost === post.id && (
              <div className="post-comments-section">
                <h3 className="comments-heading">Comments</h3>
                {comments
                  .find((c) => c.id === post.id)
                  ?.comments.slice(0, 2)
                  .map((comment) => (
                    <div key={comment.id} className="comment">
                      <div className="comment-author">{Object.keys(comment)[0]}</div>
                      <div className="comment-text">{Object.values(comment)[0]}</div>
                      {console.log(Object.keys(comment)[0], " here")}
                    </div>
                  ))}
                {comments.find((c) => c.id === post.id)?.comments.length > 2 && (
                  <div className="show-more" onClick={(e) => handleShowMoreClick(e, post)}>
                    Show more comments
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
