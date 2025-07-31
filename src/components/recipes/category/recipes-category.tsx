'use client'
import React from 'react'
import { useSearchParams, usePathname, useRouter} from 'next/navigation'
import cn from 'classnames'
import s from './recipes-category.module.sass'

import { Categories} from '@/app/api/categories/categories-data'

type RecipesCategoryType = {
    activeCategory: string | undefined
    className?: string
}
type ActiveStateType = string 
type CategoryItemType = {
    name: Categories | 'all'
    active: ActiveStateType
    onClick: (e:React.MouseEvent<HTMLButtonElement>)=>void
}


const CategoryItem:React.FC<CategoryItemType> = ({name, active, onClick}) => {
    const classes = cn(s.btn, active === name && s.isActive)
    return (
        <li className={s.item}>
            <button className={classes} type='button' onClick={onClick} data-category={name}><span>{name}</span></button> 
        </li>
    )
}


const RecipesCategory:React.FC<RecipesCategoryType> = ({activeCategory, className}) => {
    const [categories, setCategories] = React.useState<Categories[]>([])
    const classes = cn(s.list, className)
    
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const pathname = usePathname()
    const { replace } = useRouter()
    const [active, setActive] = React.useState<ActiveStateType>(activeCategory ? activeCategory : 'all')
    
    const onClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        const item = e.currentTarget
        const category = item.dataset.category

        params.delete('page')
        
        if(category) {
            params.set('category', category)
            setActive(category)
        }
        
        if(category==='all') params.delete('category') 
            
        replace(`${pathname}?${params.toString()}`)
    }
    
    React.useEffect(()=>{
        fetch('/api/categories')
            .then((x)=>x.json())
            .then(setCategories)
    }, [])
    
    return (
        <ul className={classes}>
            {
                categories.map((el)=>{
                    return <CategoryItem name={el} active={active} onClick={onClick} key={el}/>
                })
            }
            <CategoryItem name='all' active={active} onClick={onClick} key='all'/>
        </ul>
    )
}

export default RecipesCategory