import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import s from './button.module.sass'


type ButtonProps = {
    title: string,
    Icon?: any,
    className?: string,
    url?: string,
    newTab?: boolean
    type?: 'submit' | 'button',
    onClick?: (e?: any) => void
}
 
const Button:React.FC<ButtonProps> = ({title, Icon, className, url, type, newTab, onClick}) => {
    
    const classes = cn(s.button, className)
    const openNewTab = newTab ? '_blank' :''
    
    return (
        <>
            {
                url 
                    ? <Link href={url} className={classes} target={openNewTab}>{title}</Link> 
                    : <button type={type} className={classes} onClick={onClick}>
                        {title}
                        {Icon && <Icon className={s.buttonIcon}/>}
                    </button>
            }
        </>
    )
}
 
export default Button