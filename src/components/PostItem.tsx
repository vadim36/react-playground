import React from "react"
import Button from "../UI/Button"
import { ButtonVariants } from "../utils/enums"

interface PostItemProps {
  key:number,
  postData: IPost
}

const PostItem: React.FC<PostItemProps> = ({postData}) => {
  const id:number = postData.id
  const title:string = postData.title
  const body:string = postData.body
  
  return (
    <li aria-label="Post Item" 
    className="border-4 border-sky-500 w-4/5 p-2">
      <div aria-label="Post Content">
        <strong className="text-3xl font-mono">{id}. {title}</strong>
        <p className="text-lg">{body}</p>
      </div>
      <div aria-controls="*">
        <Button variant={ButtonVariants.danger}>
          Удалить
        </Button>
      </div>
    </li>
  )
}

export default PostItem