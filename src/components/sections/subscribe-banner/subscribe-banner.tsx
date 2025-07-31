import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import s from './subscribe-banner.module.sass'

import SectionHeadline from '@/components/ui/section-headline/section-headline'
import Button from '@/components/ui/button/button'


const TEXT = {
    headline: 'Deliciousness to your inbox',
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    btnTitle: 'Subscribe',
    inputPlaceholder: 'Your email address...'
}
 
 
const SubscribeBanner:React.FC = () => {

    const decorImg1 = cn(s.decorImg, s.decorImg1)
    const decorImg2 = cn(s.decorImg, s.decorImg2)

    return (
        <section>
            <div className="container">
                <div className={s.content}>
                    <SectionHeadline  headline={TEXT.headline} description={TEXT.description} className={s.head} />
                    <form className={s.form}>
                        <input className={s.input} placeholder={TEXT.inputPlaceholder}/>
                        <Button title={TEXT.btnTitle} className={s.btn} type='submit'/>
                    </form>
                    <Image src='/images/subscribe-banner-img1.png' width={410} height={400} alt='decor' className={decorImg1}/>
                    <Image src='/images/subscribe-banner-img2.png' width={360} height={247} alt='decor' className={decorImg2}/>
                </div>
            </div>
        </section>
    )
}
 
export default SubscribeBanner