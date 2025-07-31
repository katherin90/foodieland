 import React from 'react'
 import s from './footer.module.sass'

import Logo from '../ui/logo/logo'
import Menu from '../ui/menu/menu'
import SocialNetworks from '../ui/social-networks/social-networks'
import Button from '../ui/button/button'
 
 
const Footer:React.FC = () => {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.footerTop}>
                    <div>
                        <Logo/>
                        <p className={s.infoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, corporis.</p>
                    </div>
                    <Menu className={s.nav}/>
                </div>
                <hr className={s.footerDivider}/>
                <div className={s.footerBottom}>
                    <Button title='See Code' url='https://github.com/katherin90/foodieland.git' newTab className={s.codeLink}/>
                    <p>design by <a href='https://www.flowbase.co/'>Flowbase</a></p>
                    <SocialNetworks />
                </div>
            </div>
        </footer>
    )
}
 
export default Footer