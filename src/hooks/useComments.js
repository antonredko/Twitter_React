import React, { createContext, useContext, useReducer, useEffect } from 'react'

const CommentsContext = createContext()
export const useComments = () => useContext(CommentsContext)

export default function CommentsProvider({children}) {

    const [comments, commentsAction] = useReducer(commentsReducer, [])

    useEffect(() => {
        (async (url) => {
            const data = await fetch(url).then(r => r.json())
            commentsAction({type: 'set', payload: data})
        })('http://jsonplaceholder.typicode.com/comments')
    }, [])

    function commentsReducer(state, {type, payload}) {
        switch (type) {
            case 'set' :
                return payload
            default:
                throw new Error('Received wrong action type from dispatch function!')
        }
    }

    return <CommentsContext.Provider value={{comments, commentsAction}}>{children}</CommentsContext.Provider>
}