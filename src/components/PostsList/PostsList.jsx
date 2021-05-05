import React, { useEffect, useState } from 'react'
import getData from '../../api/getData'
import PostItem from '../PostItem/PostItem'

export default function PostsList() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getData('http://jsonplaceholder.typicode.com/posts?_expand=user&_embed=comments', data => setPosts(data))
    }, [])
    return (
        <ul>
            {posts.map(post => 
                <PostItem 
                    key={post.id}
                    item={post}
                />
            )}
        </ul>
    )
}