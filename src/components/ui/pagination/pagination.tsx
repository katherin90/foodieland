'use client'
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import s from './pagination.module.sass'
import cn from 'classnames'

type paginationType = {
    pagesCount: number
    currentPage: number
    className?: string
}

const createItem = (type:string, index:number, isActive:boolean, onClick:(e:React.MouseEvent<HTMLButtonElement>)=> void) => {
    const classes = cn(s.btn, isActive && s.isActive);

    return (
        <li className={s.item} key={`page-${index}`}>
            <button
                className={classes}
                onClick={onClick}
                data-page={index}
            >
                {type === 'number' ? index : '...'}
            </button>
        </li>
    );
};

const createPagination = (count:number, current:number, onClick:(e:React.MouseEvent<HTMLButtonElement>)=> void) => {
    
    const addDots = (index:number, onClick:(e:React.MouseEvent<HTMLButtonElement>)=> void) => createItem('dots', index, false, onClick);
    
    const items = Array.from({ length: count }, (_, i) => {
        const page = i + 1;
        const isActive = page === current || (page === 1 && isNaN(current));
        return createItem('number', page, isActive, onClick);
    });

    if (items.length > 5) {
        const itemsLength = items.length;
    
        if (isNaN(current) || current <= 3) {
            return [
                items[0], 
                ...items.slice(1, 4),
                addDots(5, onClick),
                items[itemsLength - 1],
            ];
        }
    
        if (current > 3 && current < itemsLength - 2) {
            return [
                items[0],
                addDots(current-1, onClick),
                ...items.slice(current-1, current),
                addDots(current + 1, onClick),
                items[itemsLength - 1],
            ];
        }
    
        if (current >= itemsLength - 2) {
            return [
                items[0],
                addDots(itemsLength - 4, onClick),
                ...items.slice(-4),
            ];
        }
    }

    return items;
};

 
const Pagination:React.FC<paginationType> = ({pagesCount, currentPage, className})=>{
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const {replace} = useRouter()

    const classes = cn(s.container, className)
    const navClasses = cn(s.item, s.nav)

    const changePage = (e:React.MouseEvent<HTMLButtonElement>)=> {
        const targetBtn = e.currentTarget.dataset.page
        const params = new URLSearchParams(searchParams)
        let current: string = '1';
        
        if (targetBtn && isNaN(+targetBtn)) {
            switch (targetBtn) {
                case 'prev':
                    current = (currentPage - 1).toString()
                    break;
                case 'next': 
                    currentPage = isNaN(currentPage) ? 1 : currentPage
                    current = (currentPage + 1).toString()
                    break;
            }

        } else {
            current = targetBtn ? targetBtn : '1'
        }
        
        switch (current) {
            case "1":
                params.delete('page')
                break;
        
            default:
                params.set('page', current)
                break;
        }
        replace(`${pathname}?${params.toString()}`)
    }
    
    const items = createPagination(pagesCount, currentPage, changePage)
    

    return (
        <div className={classes}>
            <ul className={s.list}>
                <li className={navClasses}>
                    <button className={s.btn} onClick={changePage} data-page='prev' disabled={isNaN(currentPage)}>
                        (
                    </button>
                </li>
                {
                    items.map(item => item)
                }
                <li className={navClasses}  >
                    <button className={s.btn} onClick={changePage} data-page='next' disabled={currentPage === pagesCount}>
                        )
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination