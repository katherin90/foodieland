import React from 'react'
import s from './loader.module.sass'

import LoaderIcon from '@/assets/icon/loader.svg'


const Loader:React.FC = () => {
    return (
        <div className={s.loader}>
            <LoaderIcon className={s.icon}/>
        </div>
    )
}

export default Loader