export enum Categories{
   SNACK = 'Snack',
   NOODLES = 'Noodles',
   BREAKFAST = 'Breakfast',
   HEALTHY = 'Healthy',
   FISH = 'Fish',
   MEAT = 'Meat',
   SEAFOOD= 'Seafood',
   SWEET = 'Sweet',
   WESTERN = 'Western',
   EASTERN = 'Eastern',
   JAPANESE = 'Japanese'
}

export const CATEGORIES = [
    Categories.SNACK, 
    Categories.NOODLES, 
    Categories.BREAKFAST, 
    Categories.HEALTHY, 
    Categories.FISH, 
    Categories.MEAT, 
    Categories.SEAFOOD,
    Categories.SWEET,
    Categories.EASTERN,
    Categories.WESTERN,
    Categories.JAPANESE
]

export async function getCategories(){
    const promise = new Promise((res)=>res(CATEGORIES))
    return await promise
}