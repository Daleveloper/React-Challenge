import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([])
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
  }, []);
  console.log("line16",posts)
  
 const clickHandler = (post) => {
   console.log("line19", post)
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then(setComments)
      .catch((error) => {
        console.log(error)
      })
 };
  
  const posties= posts.map((post, index)=>{
    return(
    <div key={index}>
        <h1>{post.title}</h1>
        <h3 onClick={()=>clickHandler(post)}>{post.body}</h3>
      </div>
    )
  });
  
  return (
    <div className="App">
      {posties}
      <PostDetail comments={comments}/>
    </div>
  );
}

export default App;