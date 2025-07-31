'use client'
import React from 'react'
import s from './simple-section.module.sass'

import SectionHeadline from '@/components/ui/section-headline/section-headline'
import Recipe from '@/components/ui/recipe/recipe'

import { getRecipes } from '@/helpers/getRecipes'
import { RecipeType } from '@/app/api/recipes/recipes-data'

const TEXT = {
    headline: 'Simple and tasty recipes',
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim'
}
 
 
const SimpleSection:React.FC = () => {
    const [recipes, setRecipes] = React.useState<RecipeType[]>([])
    
    React.useEffect(()=>{
        setRecipes(getRecipes(1,10))
    }, [])
    
    return (
        <section>
            <div className="container">
                <SectionHeadline headline={TEXT.headline} description={TEXT.description} className={s.head}/>
                <div className={s.recipesList}>
                    {
                        recipes.map(item => <Recipe data={item} size='big' key={`simple-${item.title}`}/>)
                    }
                </div>
            </div>
        </section>
    )
}
 
export default SimpleSection