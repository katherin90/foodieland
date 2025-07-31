import React from 'react'
import cn from 'classnames'
import s from './section-headline.module.sass'

type SectionHeadlineProps = {
    headline: string, 
    description?: string, 
    align?: 'center' | 'left', 
    towCol?: boolean,
    className?: string
}
 
 
const SectionHeadline:React.FC<SectionHeadlineProps> = ({headline, description, align='center', towCol=false, className}) => {
    const headClasses = cn(
        s.sectionHead,
        towCol && s.towCol,
        align==='left' && s.isLeft,
        className
    )
    return (
        <>
            <div className={headClasses}>
                <h2 className={s.headline}>{headline}</h2>
                {description && <p className={s.description}>{description}</p>}
            </div>
        </>
    )
}
 
export default SectionHeadline