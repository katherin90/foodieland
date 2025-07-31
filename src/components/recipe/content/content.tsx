import React from 'react'
import s from './content.module.sass'
import Image from 'next/image'

import TastyRecipes from '@/components/tasty-recipes/tasty-recipes'

const TEXT = {
    otherRecipeTitle: 'Other Recipe',
    ingredientsTitle: 'Ingredients',
    stepsTitle: 'Directions'
}

type IngredientType = {title: string, items: string[]}
type StepsType = {title: string, text: string}
type ContentDataType = {
    ingredients: IngredientType[]
    steps: StepsType[]
}
type RecipeContentType = {
    data: ContentDataType
}

const IngredientsList: React.FC<IngredientType> = ({title, items})=>{
    return (
        <div className={s.ingredientsPart}>
            <h3 className={s.ingredientsTitle}>{title}</h3>
            <ul className={s.ingredientsList}>
                {
                    items.map((el, index)=>{
                        return (
                            <li className={s.ingredientsItem} key={`${el}-${index}`}>
                                <label>
                                    <input type='checkbox' className={s.check}></input>
                                    <span className={s.label}>{el}</span>
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
const StepsItem:React.FC<StepsType>=({title, text})=>{
    return (
        <li className={s.stepItem}>
            <label>
                <input type='checkbox' className={s.check}></input>
                <h3 className={s.stepTitle}>{title}</h3>
                <span className={s.stepDescription} dangerouslySetInnerHTML={{__html: text}}/>
            </label>
        </li>
    )
}

const RecipeContent:React.FC<RecipeContentType> = ({data}) => {
    const {ingredients, steps} = data
    return (
        <div className={s.content}>
            <div className={s.main}>
                <div className={s.part}>
                    <h2 className={s.partTitle}>{TEXT.ingredientsTitle}</h2>
                    {
                        ingredients.map((el, index)=><IngredientsList title={el.title} items={el.items} key={`ingredients-${index}`}/>)
                    }
                </div>
                <div className={s.part}>
                    <h2 className={s.partTitle}>{TEXT.stepsTitle}</h2>
                    <ul className={s.stepList}>
                        {
                            steps.map((step, index)=><StepsItem title={step.title} text={step.text} key={`step-${index}`}/>)
                        }
                    </ul>
                </div>
            </div>
            <aside className={s.sidebar}>
                <TastyRecipes headline={TEXT.otherRecipeTitle}/>
                <Image src='/images/Ads.jpg' alt='ads' width={400} height={435} className={s.ads}/>
            </aside>
        </div>
    )   
}

export default RecipeContent