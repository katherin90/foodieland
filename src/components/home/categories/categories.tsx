'use client'
import React from 'react'
import Link from 'next/link'
import s from './categories.module.sass'

import SectionHeadline from '@/components/ui/section-headline/section-headline'
import { Categories} from '@/app/api/categories/categories-data'


const TEXT = {
    headline: 'Categories',
    btnText: 'View All'
}
 
const CategoriesSection:React.FC = () => {
    const [categories, setCategories] = React.useState<Categories[]>([])

    React.useEffect(()=>{
        fetch('/api/categories')
            .then((x)=>x.json())
            .then(setCategories)
    }, [])
    
    return (
        <section>
            <div className="container">
                <div className={s.head}>
                    <SectionHeadline headline={TEXT.headline} align='left'/>
                    <Link href='/recipes' className={s.link}>{TEXT.btnText}</Link>
                </div>
                <div className={s.content}>
                    {
                        categories.map(item => <Link href={`/recipes?category=${item}`} className={s.categoriesLink} key={item}>{item}</Link>)
                    }
                </div>
            </div>
        </section>
    )
}
 
export default CategoriesSection