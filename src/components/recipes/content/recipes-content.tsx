import React from 'react'
import s from './recipes-content.module.sass'

import { RecipeType } from '@/app/api/recipes/recipes-data'
import Recipe from '@/components/ui/recipe/recipe'
import NotFoundBlock from '@/components/ui/no-found-block/not-found-block'

type RecipesContentType = {
    data : RecipeType[]
}


const RecipesContent:React.FC<RecipesContentType> = ({data}) => {
    return (
        <>
            {
                data.length ?   <ul className={s.list}>
                                    {
                                        data.map(el=>{
                                                return <li className={s.item} key={el.slug}><Recipe data={el}/></li>
                                            })
                                    }
                                </ul>
                            :   <NotFoundBlock text={'No recipes found for this query'}/>
            }
        </>
    )
}

export default RecipesContent