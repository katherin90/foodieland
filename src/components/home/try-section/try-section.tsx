'use client'
import React from 'react'
import s from './try-section.module.sass'

import { getRecipes } from '@/helpers/getRecipes'

import SectionHeadline from '@/components/ui/section-headline/section-headline'
import Recipe from '@/components/ui/recipe/recipe'

import { RecipeType } from '@/app/api/recipes/recipes-data'
const TEXT = {
    headline: 'Try this delicious recipe to make your day',
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim'
}
 
const TrySection:React.FC = () => {
    const [recipes, setRecipes] = React.useState<RecipeType[]>([])

    React.useEffect(()=>{
        setRecipes(getRecipes(10, 18))
    }, [])

    return (
        <section>
            <div className="container">
                <SectionHeadline headline={TEXT.headline} description={TEXT.description} towCol align='left' className={s.head}/>
                <div className={s.list}>
                    {
                        recipes.map(item => <Recipe data={item}  key={`try-${item.title}`}/>)
                    }
                </div>
            </div>
        </section>
    )
}
 
export default TrySection