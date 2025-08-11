'use client'
import React from 'react'
import { useSearchParams, usePathname, useRouter} from 'next/navigation'
import cn from 'classnames'
import s from './search.module.sass'
import Button from '../button/button'

const TEXT = { 
    placeholder: 'Search',
    btn: 'Search'
}

type SearchType = {
    className?: string
}

const Search:React.FC<SearchType> = ({className}) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();
    const classes = cn(s.container, className)
    const params = new URLSearchParams(searchParams)
    
    const onSubmit  = (e:any)=>{
        if(e.code==="Enter" || e.code === undefined) {
            const term = inputRef.current?.value
            params.delete('page')
            if (term) {
                params.set('query', term);
            } else {
                params.delete('query');
            }
            replace(`${pathname}?${params.toString()}`)
        }
    }
    const onBlur = () => {
        const value = inputRef.current?.value
        if(value === '')  {
            params.delete('query');
            
        } else {
            if (value) params.set('query', value)
        }
        replace(`${pathname}?${params.toString()}`)
    }
    
    return (
        <div className={classes}>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input className={s.input} placeholder={TEXT.placeholder}  defaultValue={searchParams.get('query')?.toString()} ref={inputRef} onKeyDown={onSubmit} name="search" onBlur={onBlur}/>
                <Button type='button' title={TEXT.btn} className={s.btn} onClick={onSubmit}/>
            </form>
        </div>
    )
}

export default Search