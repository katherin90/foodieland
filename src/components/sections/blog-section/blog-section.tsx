'use client'
import React from 'react'
import s from './blog-section.module.sass'

import SectionHeadline from '@/components/ui/section-headline/section-headline'
import Button from '@/components/ui/button/button'

import { getPosts } from '@/helpers/Posts'

import { PostType } from '@/app/api/posts/posts'
import Post from '@/components/ui/post/post'



const TEXT = {
    headline: 'Interesting in our blog',
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ',
    btn: 'All Posts'
}


const BlogSection:React.FC = () => {
    const [posts, setPosts] = React.useState<PostType[]>([])
    React.useEffect(()=>{
        setPosts(getPosts(0, 4))
    },[])
    return (
        <section className={s.section}>
            <div className="container">
                <SectionHeadline headline={TEXT.headline} description={TEXT.description} className={s.headline}/>
                <div className={s.content}>
                    {
                        posts.map(post=><Post data={post} key={post.title}/>)
                    }
                </div>
                <div className={s.btnContainer}>
                    <Button title={TEXT.btn} url={`/blog`}/>
                </div>
            </div>
        </section>
    )
}

export default BlogSection