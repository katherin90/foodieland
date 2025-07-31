import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import s from './post.module.sass'


import RecipeAuthor from '../recipe-author/recipe-author'

import { PostType } from '@/app/api/posts/posts'
type PostFcType = {
    data: PostType
    inBlog?: boolean
}

const Post: React.FC<PostFcType> = ({data, inBlog}) => {
    const {slug, title, img, description, date, author} = data
    const classes = cn(s.post, inBlog && s.inBlog)
    const infoClasses = cn(s.info, inBlog && s.row)

    return (
        <Link href={`/blog/${slug}`} className={classes}>
            <div className={s.imgContainer}>
                <Image src={img} width={290} height={200} alt={title} className={s.img}/>
            </div>
            <div className={s.text}>
                <h3 className={s.postTitle}>{title}</h3>
                <p className={s.postDescription}>{description}</p>
                <RecipeAuthor photo={author.photo} name={author.name} date={date} className={infoClasses}/>
            </div>
        </Link>
    )
}

export default Post