import {RECIPES, RecipeType} from '@/app/api/recipes/recipes-data'

type getRecipesType = (index: number, count?: number) => RecipeType[]

const CONST = {
    prePage: 9
}

export const getRecipes : getRecipesType = (index, count) => {
    return RECIPES.slice(index, count)
}

export const getSearchRecipes = (query='', category='', currentPage=1) => {
    let recipes = []
    const start = (currentPage-1) * CONST.prePage
    const end = start + CONST.prePage
    
    recipes = query !== '' 
        ? RECIPES.filter(recipe => recipe.title.toLowerCase().includes(query.toLowerCase()))
        : RECIPES
    recipes = category !== '' 
        ? recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase())
        : recipes

    const pagesCount = Math.ceil(recipes.length/CONST.prePage)
    
    if(currentPage) recipes = recipes.slice(start, end)
         
    return {recipes, pagesCount}

}

export function getRecipe(slug:string){

    const index = RECIPES.findIndex(item => item.slug === slug)
    
    return RECIPES[index]
}