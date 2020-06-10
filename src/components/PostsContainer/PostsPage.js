//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data' 

const PostsPage = (props) => {
  const [posts, setPosts] = useState(dummyData);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {/* <Post post={posts[0]}/>
      <Post post={posts[1]}/> */}
      {
        posts.map(x => {
          return <Post post={x}/>
        })
      }
    </div>
  );
};

export default PostsPage;
