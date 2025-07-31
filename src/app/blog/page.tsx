import React from 'react'
import Image from 'next/image'
import s from './blog.module.sass'

import SubscribeBanner from '@/components/sections/subscribe-banner/subscribe-banner'
import PageHeadline from '@/components/ui/page-headline/page-headline'
import Description from '@/components/ui/description/description'
import Search from '@/components/ui/search/search'
import BlogList from '@/components/blog/blog-list/blog-list'
import TastyRecipes from '@/components/tasty-recipes/tasty-recipes'
import Pagination from '@/components/ui/pagination/pagination'

import { getSearchPosts } from '@/helpers/Posts'

export const metadata = {
  title: "Blog",
};

const TEXT = {
  headline: 'Blog & Article',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  recipesTitle: 'Tasty Recipes'
}

const Blog:React.FC = async (props:any)=>{
  const params = await props.searchParams
  const {query, page} = params
  const currentPage = +page
  const search = query || ''
  const {posts, pagesCount} = getSearchPosts(search, page)
  
  return (
    <>
        <section>
          <div className="container">
            <div className={s.head}>
              <PageHeadline text={TEXT.headline}/>
              <Description text={TEXT.description}/>
            </div>
            <div className={s.search}>
              <React.Suspense>
                <Search/>
              </React.Suspense>
            </div>
            <div className={s.content}>
              <BlogList data={posts}/>
              <aside className={s.sidebar}>
                <TastyRecipes headline={TEXT.recipesTitle}/>
                <Image src='/images/Ads.jpg' alt='ads' width={400} height={435} className={s.ads}/>
              </aside>
              {
                pagesCount > 1 && <Pagination pagesCount={pagesCount} currentPage={currentPage} className={s.blogPagination}/>
              }
            </div>
          </div>
        </section>
        <SubscribeBanner/>
    </>
    
  )
}


export default Blog