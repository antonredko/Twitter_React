import React, { createContext, useContext, useReducer, useEffect } from 'react'

const PostsContext = createContext()
export const usePosts = () => useContext(PostsContext)

export default function PostsProvider({children}) {

    const [posts, postsAction] = useReducer(postsReducer, [])

    useEffect(() => {
        (async (url) => {
            const data = await fetch(url).then(r => r.json())
            postsAction({type: 'set', payload: data})
        })('http://jsonplaceholder.typicode.com/posts')
    }, [])

    function postsReducer(state, {type, payload}) {
        switch (type) {
            case 'set' :
                return payload
            default:
                throw new Error('Received wrong action type from dispatch function!')
        }
    }

    return <PostsContext.Provider value={{posts, postsAction}}>{children}</PostsContext.Provider>
}