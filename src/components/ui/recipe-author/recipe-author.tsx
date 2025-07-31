import React from 'react'
import cn from 'classnames'
import s from './recipe-author.module.sass'
import Image from 'next/image'

type  RecipeAuthorType = {
    photo?: string
    name: string
    date?: string
    className?: string
}
 
 
const RecipeAuthor:React.FC<RecipeAuthorType> = ({photo, name, date, className}) => {
    const classes = cn(
        s.author,
        className
    )
    return (
        <span className={classes}>
            { photo && <Image src={photo} width={50} height={50} alt={name} className={s.img}/>}
            <span className={s.name}>{name}</span>
            {date && <span className={s.date}>{date}</span>}
        </span>
    )
}
 
export default RecipeAuthor