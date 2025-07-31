import React from 'react'

import Article from '@/components/blog/post/article';
import DeliciousRecipes from '@/components/sections/delicious-recipes/delicious-recipes';
import SubscribeBanner from '@/components/sections/subscribe-banner/subscribe-banner';


export const metadata = {
  title: "Post",
};


const Post:React.FC = ()=>{
  return (
    <>
      <Article/>
      <SubscribeBanner/>
      <DeliciousRecipes headline='Check out the delicious recipes'/>
    </>
    
  )
}


export default Post