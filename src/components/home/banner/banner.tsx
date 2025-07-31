import React from 'react'
import Image from 'next/image'
import s from './banner.module.sass'


import SectionHeadline from '@/components/ui/section-headline/section-headline'
import Button from '@/components/ui/button/button'


const TEXT = {
    headline : 'Everyone can be a chef in their own kitchen',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aperiam tenetur fugit aut illo velit!',
    linkText: 'Learn More'
}
 
 
const Banner:React.FC = () => {
    return (
        <section className={s.banner}>
            <div className="container">
                <div className={s.row}>
                    <div className={s.info}>
                        <SectionHeadline headline={TEXT.headline} description={TEXT.description} align='left'/>
                        <Button title={TEXT.linkText} url='/' className={s.link}/>
                    </div>
                    <Image src='/images/home-banner-img.png' alt='decor' width={710} height={600} className={s.img}/>
                </div>
            </div>
        </section>
    )
}
 
export default Banner