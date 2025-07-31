import React from 'react'
import s from './hero.module.sass'
import Image from 'next/image'

const TEXT = {
    nutritionTitle: 'Nutrition Information',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

type HeroDataObj = {
    img: string
    description: string
    nutrition: {name: string, value: string}[]
}
type HeroType = {
    data: HeroDataObj
}
const Hero:React.FC<HeroType> = ({data}) => {
    const {img, description, nutrition} = data
    return (
        <div className={s.hero}>
            <div className={s.imgContainer}>
                <Image src={img} alt='img' width={840} height={600}/>
            </div>
            <div className={s.info}>
                <h2 className={s.infoTitle}>{TEXT.nutritionTitle}</h2>
                <ul className={s.list}>
                    {
                        nutrition.map(item=>{
                            return (
                                <li className={s.item} key={item.name}>
                                    <span>{item.name}</span>
                                    <span>{item.value}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className={s.note}>{TEXT.nutritionDescription}</p>
            </div>
            <p className={s.description}>{description}</p>
        </div>
    )
}

export default Hero