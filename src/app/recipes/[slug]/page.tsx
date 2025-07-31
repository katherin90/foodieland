import React from 'react'

import DeliciousRecipes from '@/components/sections/delicious-recipes/delicious-recipes'
import SubscribeBanner from '@/components/sections/subscribe-banner/subscribe-banner'
import Head from '@/components/recipe/head/head'
import Hero from '@/components/recipe/hero/hero'

import { getRecipe } from '@/helpers/getRecipes'
import RecipeContent from '@/components/recipe/content/content'
import NotFoundBlock from '@/components/ui/no-found-block/not-found-block'
 
export const metadata = {
    title: 'Recipe',
}

const TEXT = {
    noFound: {title: 'Sorry! This recipe is not found', link:'/recipes'}
}
 
 
const RecipePage:React.FC = async(props:any) => {
    
    const params = await props.params
    const {slug} = params
    const recipe = getRecipe(slug)

    const headData = {title: recipe?.title, authorImg: recipe?.authorImg, author: recipe?.author, date: recipe?.date, prepTime:  recipe?.prepTime, cookTime: recipe?.cookTime, category: recipe?.category}
    const heroData = {img: recipe?.img, description: recipe?.description, nutrition: recipe?.nutrition }
    const contentData = {ingredients: recipe?.ingredients, steps: recipe?.steps}
    
    return (
        <>
            <section>
                <div className="container">
                    { 
                        recipe 
                            ?   <>
                                    <Head data={headData}/>
                                    <Hero data={heroData}/>
                                    <RecipeContent data={contentData}/>
                                </> 
                            : <NotFoundBlock text={TEXT.noFound.title} link={TEXT.noFound.link}/>
                    }
                </div>
            </section>
            <SubscribeBanner/>
            <DeliciousRecipes headline='You may like these recipe too'/>
        </>
    )
}
 
export default RecipePage