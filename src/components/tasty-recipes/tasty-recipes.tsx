'use client'
import React from 'react'
import s from './tasty-recipes.module.sass'

import Recipe from '../ui/recipe/recipe'

import { getRecipes } from '@/helpers/getRecipes'

import { RecipeType, RECIPES } from '@/app/api/recipes/recipes-data'


type TastyRecipesType = {
    headline: string
}

const TastyRecipes:React.FC<TastyRecipesType> = ({headline}) => {
    const [recipes, setRecipes] = React.useState<RecipeType[]>([])
        
    React.useEffect(()=>{
        const startIndex = Math.floor(Math.random() * (RECIPES.length - 4))
        const endIndex = startIndex + 3
        setRecipes(getRecipes(startIndex,endIndex))
    }, [])
    
    return (
        <div className={s.block}>
            <h2 className={s.headline}>{headline}</h2>
            <ul className={s.content}>
                {
                    recipes.map(recipe => <li className={s.item} key={recipe.title}><Recipe data={recipe} size='small'/></li>)
                }
            </ul>
        </div>
    )
}

export default TastyRecipes