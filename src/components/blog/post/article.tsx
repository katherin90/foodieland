'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import s from './article.module.sass'

import { getPost } from '@/helpers/Posts'

import RecipeAuthor from '@/components/ui/recipe-author/recipe-author'
import SocialNetworks from '@/components/ui/social-networks/social-networks'
import PageHeadline from '@/components/ui/page-headline/page-headline'
import NotFoundBlock from '@/components/ui/no-found-block/not-found-block'


const defaultPost = {
    title: 'default title',
    author: {photo: '', name: ''},
    date: '',
    article: '',
    description: '',
    img: ''
}
 const TEXT = {
    sidebarHeadline: 'share this on:',
    notFound: {text:'Sorry! This post is not found', link:'/blog'}
    
 }


const Article:React.FC = () => {
    const slug = usePathname().split('/')[2] 
    
    const [post, setPost] = React.useState(defaultPost)
    
    React.useEffect(()=>{
        setPost(getPost(slug))
    }, [])
    return (
        <section>
            <div className="container">
                {
                    post 
                        ?   <>
                                <div className={s.head}>
                                    <PageHeadline text={post.title}/>
                                    <RecipeAuthor photo={post.author.photo} name={post.author.name} date={post.date} className={s.author}/>
                                    <p className={s.description}>{post.description}</p>
                                </div>
                                <div className={s.imgContainer}>
                                    {
                                        post.img && <Image src={post.img} width={1280} height={600} alt={post.title} className={s.img}/>
                                    }
                                </div>
                                <div className={s.content}>
                                    <article dangerouslySetInnerHTML={{__html: post.article}}></article>
                                    <aside className={s.sidebar}>
                                        <h4 className={s.sidebarHeadline}>{TEXT.sidebarHeadline}</h4>
                                        <SocialNetworks className={s.sidebarLink}/>
                                    </aside>
                                </div>
                            </>
                        :   <NotFoundBlock text={TEXT.notFound.text} link={TEXT.notFound.link}/>
                }
                
            </div>
        </section>
    )
}

export default Article