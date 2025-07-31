import React from 'react'
import cn from 'classnames'
import s from './input.module.sass'

type InputType = {
    name: string
    label: string
    placeholder: string
    type?: string
    isTextArea? : boolean
    className?: string
}


const Input:React.FC<InputType> = ({name, label, placeholder, type = 'text', isTextArea, className}) => {
    const classes = cn(
        s.input,
        isTextArea && s.textarea,
    )
    const containerClasses = cn(
        s.container,
        className
    )
    return (
    <div className={containerClasses}>
        <label className={s.label}>{label}</label>
        {
            isTextArea ? (
                <textarea placeholder={placeholder} className={classes} name={name}/>
            ) : (
                <input type={type} placeholder={placeholder} className={classes} name={name}/>
            )
        }

    </div>
    )
}

export default Input