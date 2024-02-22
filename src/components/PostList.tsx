import React, { useState } from "react";
import PostItem from "./PostItem";

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([
    {id: 1,  title: 'Title 1', body: 'Description'},
    {id: 2,  title: 'Title 2', body: 'Description'},
    {id: 3,  title: 'Title 3', body: 'Description'},
  ])
  
  return (
    <ul aria-label="Posts List" className="flex flex-col items-center
    gap-2 pt-2">
      {posts.map((post:IPost) => 
        <PostItem postData={post} key={post.id}/>)}
    </ul>
  )
}

export default PostList