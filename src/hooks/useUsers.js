import React, { createContext, useContext, useReducer, useEffect } from 'react'

const UsersContext = createContext()
export const useUsers = () => useContext(UsersContext)

export default function UsersProvider({children}) {

    const [users, usersAction] = useReducer(usersReducer, [])

    useEffect(() => {
        (async (url) => {
            const data = await fetch(url).then(r => r.json())
            usersAction({type: 'set', payload: data})
        })('http://jsonplaceholder.typicode.com/users')
    }, [])

    function usersReducer(state, {type, payload}) {
        switch (type) {
            case 'set' :
                return payload
            default:
                throw new Error('Received wrong action type from dispatch function!')
        }
    }

    return <UsersContext.Provider value={{users, usersAction}}>{children}</UsersContext.Provider>
}