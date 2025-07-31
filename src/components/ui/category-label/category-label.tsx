import React from 'react'
import cn from 'classnames'
import s from './category-label.module.sass'

type CategoryLabelType = {
    data: string
    className?: string
}

import CategoryIcon from '@/assets/icon/ForkKnife.svg'
 
 
const CategoryLabel:React.FC<CategoryLabelType> = ({data, className}) => {
    const classes = cn(
        s.info,
        className
    )
    return (
        <span className={classes}>
            <CategoryIcon className={s.icon} />
            {data}
        </span>
    )
}
 
export default CategoryLabel