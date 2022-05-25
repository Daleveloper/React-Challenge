import React from "react";

function PostDetail({comments}){
  
  const response = comments.map((comment, index)=>{
    return(
    <div key={index}>
        <p>{comment.body}</p>
      </div>
    )
  });
  return(
  <div>
    {response}
    </div>
  )
}






export default PostDetail;