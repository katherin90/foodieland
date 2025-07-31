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
        setTimeout(()=>{setIsShow(false)}, 5000)
    }, [])
    
    const closeOnClick = () => setIsShow(false)
    
    return (
        <div className={classes}>
            <h2 className={s.headline}>Only Demo</h2>
            <p className={s.description}>
                This is not a real website. It has been created solely for demonstration purposes.
            </p>
            <Button title='Close' type='button' onClick={closeOnClick} className={s.btn}/>
        </div>
    )
}

export default DemoPopup