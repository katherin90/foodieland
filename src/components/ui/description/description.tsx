import React from 'react'
import s from './description.module.sass'

type DescriptionType = {
    text: string
}

const Description:React.FC<DescriptionType> = ({text}) => {
  return <p className={s.text}>{text}</p>
}

export default Description