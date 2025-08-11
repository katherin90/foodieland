'use client'
import React from 'react'
import cn from 'classnames'
import s from './demo-popup.module.sass'
import Button from '../ui/button/button'


const DemoPopup:React.FC = () => {
    const [isShow, setIsShow] = React.useState(true)
    const classes = cn(
        s.content,
        isShow && s.show
    )
    
    React.useEffect(()=>{
        setTimeout(()=>{setIsShow(false)}, 9000)
    }, [])
    
    const closeOnClick = () => setIsShow(false)
    
    return (
        <div className={classes}>
            <h2 className={s.headline}>Only Demo</h2>
            <p className={s.description}>
                This is not a real website. It has been created solely for demonstration purposes.
            </p>
            <h3>On this demo, you can:</h3>
            <ul className={s.list}>
                <li>navigate through pages</li>
                <li>filter recipes</li>
                <li>search among recipes and posts</li>
                <li>page-by-page pagination works</li>
            </ul>
            <Button title='Close' type='button' onClick={closeOnClick} className={s.btn}/>
        </div>
    )
}

export default DemoPopup