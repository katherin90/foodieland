import React from 'react'
import s from './not-found-block.module.sass'
import Button from '../button/button'

type NotFoundBlockType = {
    text: string,
    link: string
}


const NotFoundBlock:React.FC<NotFoundBlockType> = ({text, link}) => {
    return (
        <div className={s.content}>
            <p className={s.text}>{text}</p>
            <Button title='View other' url={link}/>
        </div>
        
    )
}

export default NotFoundBlock