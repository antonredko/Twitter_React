import React, { createContext, useContext, useReducer, useEffect } from 'react'
import getData from "../api/getData"

const UsersContext = createContext()
export const useUsers = () => useContext(UsersContext)
export default function UsersProvider({ children }) {
    const [users, usersAction] = useReducer(usersReducer, [])

    useEffect(() => {
        getData('http://jsonplaceholder.typicode.com/users', data => usersAction({type: 'set', payload: data}))
    }, [])

    function usersReducer(state, {type, payload}) {
        switch (type) {
            case "set": {
                return [...payload]
            }
            case "user": {
                const userData = 
            }
            default:
                throw new Error('Received wrong action type from dispatch function!')
        }
    }
    return <UsersContext.Provider value={{users, usersAction}}>{children}</UsersContext.Provider>
}