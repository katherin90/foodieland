import React from 'react';
import s from './recipes.module.sass'

import PageHeadline from '@/components/ui/page-headline/page-headline';
import Search from '@/components/ui/search/search';
import SubscribeBanner from '@/components/sections/subscribe-banner/subscribe-banner';
import RecipesCategory from '@/components/recipes/category/recipes-category';
import RecipesContent from '@/components/recipes/content/recipes-content';
import Pagination from '@/components/ui/pagination/pagination';

import { getSearchRecipes } from '@/helpers/getRecipes';


export const metadata = {
    title: 'Foodieland - Recipes',
};

const TEXT = {
    pageHeadline: 'Recipes'
}

const RecipesPage:React.FC = async (props:any) =>  {
    const params = await props.searchParams
    const {query, page, category} = params
    const currentPage = +page
    const search = query || ''
    const {recipes, pagesCount} = getSearchRecipes(search, category, page)

    return (
        <>
            <section>
                <div className="container">
                    <div className={s.head}>
                        <PageHeadline text={TEXT.pageHeadline}/>
                        <Search className={s.search}/>
                    </div>
                    <RecipesCategory className={s.categories} activeCategory={category}/>
                    <RecipesContent data={recipes}/>
                    {
                        pagesCount > 1 && <Pagination pagesCount={pagesCount} currentPage={currentPage} className={s.pagination}/>
                    }
                </div>
            </section>
            <SubscribeBanner/>
        </>
    )
}

export default RecipesPage