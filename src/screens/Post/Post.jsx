import React, { useState } from 'react';
import "./Post.scss";
import blog_data from '../../assets/blog.json';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

const Post = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const comments = blog_data.comments;


    return (
        <div className="post_">
            <div className="post" >
                <div className="post-header">
                    <h4 className="post-header-title">{state.title}</h4>
                    <h2 className="post-header-actions">
                        <IoMdArrowRoundBack className='edit-delete'
                            onClick={() => navigate("/")}
                        />
                    </h2>
                </div>
                <div className="post-image">
                    <img src={state.img} alt={state.title} />
                </div>
                <div className="post-details">
                    <p className="post-body">{state.body}</p>
                    <div className="post-actions">
                        <div className="post-likes">
                            <FaThumbsUp /> {state.likes.length}
                        </div>
                        <div className="post-comments">
                            <FaComment />{" "}
                            {comments.find((c) => c.id === state.id)?.comments.length || 0}
                        </div>
                    </div>
                    <div className="post-comments-section">
                        <h3 className="comments-heading">Comments</h3>
                        {comments
                            .find((c) => c.id === state.id)
                            ?.comments
                            .map((comment) => (
                                <div key={comment.id} className="comment">
                                    <div className="comment-author">{Object.keys(comment)[0]}</div>
                                    <div className="comment-text">{Object.values(comment)[0]}</div>
                                    <div className="comment-meta">
                                        <span className="comment-time">{comment.time}</span>
                                        <span className="comment-date">{comment.date}</span>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
