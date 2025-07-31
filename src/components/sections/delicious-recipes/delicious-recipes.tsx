'use client'
import React from 'react'
import s from './delicious-recipes.module.sass'

import { RecipeType } from '@/app/api/recipes/recipes-data'
import { getRecipes } from '@/helpers/getRecipes'
import SectionHeadline from '@/components/ui/section-headline/section-headline'
import Recipe from '@/components/ui/recipe/recipe'

type DeliciousRecipesType = {
  headline: string
}

const DeliciousRecipes:React.FC<DeliciousRecipesType> = ({headline}) => {
  const [recipes, setRecipes] = React.useState<RecipeType[]>([])
  React.useEffect(()=>{
    setRecipes(getRecipes(4, 8))
  }, [])
  return (
    <section>
      <div className="container">
        <SectionHeadline headline={headline}/>
        <div className={s.content}>
          {
            recipes.map(recipe=><Recipe data={recipe} key={recipe.title}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default DeliciousRecipes