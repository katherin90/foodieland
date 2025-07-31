import React from 'react'
import s from './recipes-content.module.sass'

import { RecipeType } from '@/app/api/recipes/recipes-data'
import Recipe from '@/components/ui/recipe/recipe'

type RecipesContentType = {
    data : RecipeType[]
}


const RecipesContent:React.FC<RecipesContentType> = ({data}) => {
    return (
        <ul className={s.list}>
            {
                data.map(el=>{
                    return <li className={s.item} key={el.slug}><Recipe data={el}/></li>
                })
            }
        </ul>
    )
}

export default RecipesContent