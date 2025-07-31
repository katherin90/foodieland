import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import s from './logo.module.sass'


type LogoProps = {
    className?: string
}
 

const Logo: React.FC<LogoProps> = ({className}) => {
    
    const logoClass = cn(s.logo, className)
    
    return (
        <Link href="/" className={s.logoLink}>
            <Image src='/images/logo.png' width={110} height={30} alt='logo' className={logoClass}></Image>
        </Link>
    )
}

export default Logo