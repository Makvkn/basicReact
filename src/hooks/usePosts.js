import {useMemo} from "react";


export const useSortedPosts = (state, sort) => {
    //FOR SEARCH
    const getSortedPost = useMemo(() => {
        console.log('Listened hooks')
        if (sort) {
            return [...state].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return state
    }, [sort, state])

    return getSortedPost
}

export const usePosts = (posts, sort, query) => {

    const getSortedPost = useSortedPosts(posts, sort)

//SORT AND SEARCH
    const sortedAndSearchedPost = useMemo(() => {
        return getSortedPost.filter(post => post.title.toLowerCase().includes(query))
    }, [query, getSortedPost])

    return sortedAndSearchedPost;
}
