import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import s from './button.module.sass'


type ButtonProps = {
    title: string,
    Icon?: any,
    className?: string,
    url?: string,
    type?: 'submit' | 'button',
    onClick?: (e?: any) => void
}
 
const Button:React.FC<ButtonProps> = ({title, Icon, className, url, type, onClick}) => {
    
    const classes = cn(s.button, className)
    
    return (
        <>
            {
                url 
                    ? <Link href={url} className={classes}>{title}</Link> 
                    : <button type={type} className={classes} onClick={onClick}>
                        {title}
                        {Icon && <Icon className={s.buttonIcon}/>}
                    </button>
            }
        </>
    )
}
 
export default Button