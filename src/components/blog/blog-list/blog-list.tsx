import React from 'react'
import s from './blog-list.module.sass'

import Post from '@/components/ui/post/post'

import { PostType } from '@/app/api/posts/posts'
import NotFoundBlock from '@/components/ui/no-found-block/not-found-block'
type BlogListType = {
    data: PostType[]
}


const BlogList:React.FC<BlogListType> = ({data}) => {
  return (
    <>
      {
        data.length ? <ul className={s.list}>
                          {
                              data.map(post=><li className={s.post} key={post.title}><Post data={post} inBlog/></li>)
                          }
                      </ul>
                    : <NotFoundBlock text='No posts found for this query'/>
      }
    </>
    
  )
}

export default BlogList