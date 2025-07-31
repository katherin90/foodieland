import React from 'react'
import s from './blog-list.module.sass'

import Post from '@/components/ui/post/post'

import { PostType } from '@/app/api/posts/posts'
type BlogListType = {
    data: PostType[]
}


const BlogList:React.FC<BlogListType> = ({data}) => {
  return (
    <ul className={s.list}>
        {
            data.map(post=><li className={s.post} key={post.title}><Post data={post} inBlog/></li>)
        }
    </ul>
  )
}

export default BlogList