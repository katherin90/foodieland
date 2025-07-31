 import React from 'react'
 import cn from 'classnames'
 import s from './social-networks.module.sass'
import { SOCIAL_NETWORK } from '@/assets/data/constants'
import Link from 'next/link'

const SocialNetworks:React.FC<{className?: string}> = ({className}) => {
    const classes = cn(s.socialList, className)
    return (
        <ul className={classes}>
            {
                SOCIAL_NETWORK.map((item, index)=> {
                    return (
                        <li key={`link-${index}`}>
                            <Link href='/' className={s.socialLink}>
                                {item}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default SocialNetworks