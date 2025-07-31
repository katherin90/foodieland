import React from 'react'
import cn from 'classnames'
import s from './page-headline.module.sass'

type HeadlineType = {
    text: string
    className?: string
}


const PageHeadline:React.FC<HeadlineType> = ({text, className}) => {
    const classes = cn(
        s.headline,
        className
    )
    return <h1 className={classes}>{text}</h1>
}

export default PageHeadline