import React from 'react'
import s from './header.module.sass'

import Logo from '../ui/logo/logo'
import Menu from '../ui/menu/menu'
import SocialNetworks from '../ui/social-networks/social-networks'

 
const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.headerRow}>
                    <Logo />
                    <Menu className={s.menu}/>
                    <SocialNetworks/>
                </div>
            </div>
        </header>
    )
}

export default Header