import {POSTS, PostType} from '@/app/api/posts/posts'

type getPostsType = (index: number, count?: number) => PostType[]

const CONST = {
    prePage: 6
}

export const getPosts : getPostsType = (index, count) => {
    return POSTS.slice(index, count)
}

export const getSearchPosts = (query='', currentPage=1) => {
    let posts = []
    const start = (currentPage-1) * CONST.prePage
    const end = start + CONST.prePage
    
    posts = query !== '' 
        ? POSTS.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
        : POSTS

    const pagesCount = Math.ceil(posts.length/CONST.prePage)
    
    if(currentPage) posts = posts.slice(start, end)
         
    return {posts, pagesCount}

}

export function getPost(slug:string){

    const index = POSTS.findIndex(item => item.slug === slug)
    
    return POSTS[index]
}
