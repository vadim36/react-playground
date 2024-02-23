import React from "react"

import Button from "../UI/Button"
import Input from "../UI/Input"

import { ButtonVariants } from "../utils/enums"

const PostForm: React.FC = () => {
  return (
    <form name="createPost" className="gap-2 p-2 flex">
      <Input type="text" placeholder="Название поста..."/>
      <Input type="text" placeholder="Описание поста..."/>
      <Button variant={ButtonVariants.primary}>Создать пост</Button>
    </form>
  )
}

export default PostForm