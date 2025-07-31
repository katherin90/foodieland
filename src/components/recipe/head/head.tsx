import React from 'react'
import s from './head.module.sass'

import PageHeadline from '@/components/ui/page-headline/page-headline'
import RecipeAuthor from '@/components/ui/recipe-author/recipe-author'
import CookTime from '@/components/ui/cook-time/cook-time'
import CategoryLabel from '@/components/ui/category-label/category-label'

import Print from '@/assets/icon/printer.svg'
import Share from '@/assets/icon/share.svg' 

const TEXT = {
    timePrep: 'PREP TIME',
    timeCook: 'COOK TIME',
    printLabel: 'PRINT',
    shareLabel: 'SHARE'
}

type HeadItemType = {title:string, authorImg:string, author:string, date:string, prepTime:number, cookTime:number, category:string}
type HeadType = {data: HeadItemType}

const Head:React.FC<HeadType> = ({data}) => {

    return (
        <div className={s.head}>
            <div className={s.left}>
                <PageHeadline text={data.title} className={s.headline}/>
                <div className={s.info}>
                    <RecipeAuthor photo={data.authorImg} name={data.author} date={data.date} className={s.infoItem}/>
                    <CookTime time={data.prepTime} title={TEXT.timePrep} className={s.infoItem}/>
                    <CookTime time={data.cookTime} title={TEXT.timeCook} className={s.infoItem}/>
                    <CategoryLabel data={data.category} className={s.infoItem}/>
                </div>
            </div>
            <div className={s.right}>
                <ul className={s.actions}>
                    <li className={s.actionItem}>
                        <button type='button' className={s.actionBtn}><Print/></button>
                        <span className={s.actionLabel}>{TEXT.printLabel}</span>
                    </li>
                    <li className={s.actionItem}>
                        <button type='button' className={s.actionBtn}><Share/></button>
                        <span className={s.actionLabel}>{TEXT.shareLabel}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Head