'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import s from './recipe.module.sass'

import CookTime from '../cook-time/cook-time'

import { RecipeType } from '@/app/api/recipes/recipes-data' 
import HartIcon from '@/assets/icon/Heart.svg'
import CategoryLabel from '../category-label/category-label'

 
type RecipeProps = {
    data: RecipeType,
    size?: 'small' | 'big'
 }
 
const Recipe:React.FC<RecipeProps> = ({data, size}) => {
    const [favoriteActive, setFavoriteActive] = React.useState<boolean>(false)
    const {slug, title, img, author, prepTime, cookTime, category} = data
    let itemSize
    switch (size) {
        case 'big':
            itemSize = s.big
            break;  
        case 'small':
            itemSize = s.small
            break;
        default:
            break;
    }
    const classes = cn(
        s.item,
        size && itemSize
    )
    const favoriteClasses = cn(
        s.favorite,
        favoriteActive && s.isActive
    )
    
    return (
        <div className={classes}>
            <Link href={`/recipes/${slug}`} className={s.link}>
                <div className={s.imgContainer}>
                    <Image src={img} width={290} height={200} alt={title} className={s.img}/>
                </div>
                <h3 className={s.title}>{title}</h3>
                {
                    size == 'small' && <span className={s.author}>by {author}</span>
                }
                {
                    size !== 'small' && <div className={s.info}>
                        <CookTime time={prepTime + cookTime} />
                        <CategoryLabel data={category}/>
                    </div>
                }
                
            </Link>
            {
                size !== 'small' && <button type='button' className={favoriteClasses} onClick={()=> {setFavoriteActive(!favoriteActive)}}><HartIcon className={s.favoriteIcon}/></button>
            }
        </div>
    )
}
 
export default Recipe