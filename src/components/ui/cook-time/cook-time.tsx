import React from 'react'
import cn from 'classnames'
import s from './cook-time.module.sass'


type CookTimeType = {
    time: number
    title?: string
    className?: string
}

import TimerIcon from '@/assets/icon/timer.svg'
 
 
const CookTime:React.FC<CookTimeType> = ({time, title, className}) => {
    const classes = cn(
        s.info,
        className
    )
    return (
        <span className={classes}>
            <TimerIcon className={s.icon}/>
            <span className={s.text}>
                {
                   title && <span className={s.title}>{title}</span>
                }
                {time} Minutes
            </span>
        </span>
    )
}
 
export default CookTime