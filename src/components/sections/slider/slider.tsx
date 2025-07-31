'use client'
import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import s from './slider.module.sass'

import CookTime from '@/components/ui/cook-time/cook-time'
import CategoryLabel from '@/components/ui/category-label/category-label'
import Button from '@/components/ui/button/button'
import RecipeAuthor from '@/components/ui/recipe-author/recipe-author'

import { RecipeType } from '@/app/api/recipes/recipes-data'

type SlideDataType = {
    data: RecipeType,
}
type SliderDataType = {
    data: RecipeType[],
    className?: string
}
const TEXT = {
    btnTitle : 'View Recipes'
}


const Slide:React.FC<SlideDataType> = ({data}) => {
    const {slug, title, description, img, author, authorImg, date, prepTime, cookTime, category,} = data
    return (
        <div className={s.slide}>
            <div className={s.info}>
                <h2 className={s.headline}>{title}</h2>
                <p className={s.description}>{description}</p>
                <p className={s.tag}>
                    <CookTime time={prepTime + cookTime} className={s.label}/>
                    <CategoryLabel data={category} className={s.label}/>
                </p>
                <p className={s.bottom}>
                    <RecipeAuthor photo={authorImg} name={author}  date={date}/>
                    <Button url={`/recipes/${slug}`} title={TEXT.btnTitle} className={s.btn}/>
                </p>
            </div>
            <div className={s.imgContainer}>
                <Image src={img} width={660} height={640} alt='title' className={s.img}/>
            </div>
        </div>
    )
}

const Slider:React.FC<SliderDataType> = ({data, className}) => {
    const classes = cn(
        s.slider, 
        className
    )
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [isTransitioning, setIsTransitioning] = React.useState(true)
    let slideCount:number = data.length
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null)
    
    const startAutoSlide = () => {
        if (intervalRef.current) return
      
        intervalRef.current = setInterval(() => {
          setIsTransitioning(true)
          setCurrentSlide((prev) => prev + 1)
        }, 5000)
      }
      
      const stopAutoSlide = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }
      
      React.useEffect(() => {
        startAutoSlide()
        return () => stopAutoSlide()
      }, [slideCount])
      
      const handleTransitionEnd = () => {
        if (currentSlide >= slideCount) {
          setIsTransitioning(false)
          setCurrentSlide(0)
        }
      }

    return (
        <div className={classes}>
            <div className={s.viewport} onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
                <div className={s.list} 
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {
                        data.map((recipe) => {
                            return <Slide data={recipe} key={recipe.title}/>
                        })
                    }
                    {data.length && <Slide data={data[0]}/>}
                </div>
            </div>
        </div>
    )
}

export default Slider