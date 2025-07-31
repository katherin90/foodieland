'use client'
import React from 'react'
import s from './hero.module.sass'

import { getRecipes } from '@/helpers/getRecipes'
import { RecipeType } from '@/app/api/recipes/recipes-data'
import Slider from '@/components/sections/slider/slider'


const Hero:React.FC = () => {
    const [recipes, setRecipes] = React.useState<RecipeType[]>([])
    
    React.useEffect(()=>{
        setRecipes(getRecipes(0, 3))
    }, [])
    
    return (
        <section className={s.hero}>
            <Slider data={recipes}/>
        </section>
    )
}
 
export default Hero