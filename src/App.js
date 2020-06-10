/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from './components/PostsContainer/PostsPage';
// import PostHeader from './PostHeader'
import SearchBar from './components/SearchBar/SearchBarContainer'
import PostHeader from "./components/PostsContainer/PostHeader";
// import PostHeader from './PostHeader'

const App = (props) => {
  // const [postHeaders, setpostHeaders] = useState(dummyData)
  const [searchText, setSearchText] = useState('');
  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar />
      <PostsPage />
      {/* <Post listOfPostHeaders={postHeaders.filter(x => {
        if (!searchText || x.name.includes(searchText)) {
          return PostHeader
        }
        return false
      })} /> */}
    </div>
  );
};


export default App;



