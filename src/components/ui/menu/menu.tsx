 import React from 'react'
 import cn from 'classnames'
 import s from './menu.module.sass'

 import {MENU} from '@/assets/data/constants'
import Link from 'next/link'

type MenuProps = {
    className?: string
}

 const Menu: React.FC<MenuProps> = ({className}) => {
    const classes = cn(s.menu, className)
    return (
        <nav className={classes}>
            {
                MENU.map(item=><Link href={`/${item.href}`} key={item.href} className={s.menuLink}>{item.title}</Link>)
            }
        </nav>
    )

}
export default Menu