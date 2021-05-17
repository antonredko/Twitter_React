import React from 'react'
import PostItem from '../PostItem/PostItem'

export default function PostsList({posts}) {
    
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