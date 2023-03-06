import React from 'react';
import blog_data from "../../assets/blog.json";
import PostCard from '../../componants/Post_card/PostCard';

const Home = () => {

  const blog = blog_data.blogs;
  const comments = blog_data.comments;

  return (
    <div className="home_">
      <PostCard blog={blog} comments={comments} />
    </div>
  );
};

export default Home;
