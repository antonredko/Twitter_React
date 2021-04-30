import React from 'react'
import PostItem from "../PostItem/PostItem"

export default function PostsList({posts, users, comments}) {

    return (
        <ul>
            {posts.map(post => 
                <PostItem 
                    key={post.id}
                    item={post}
                    users={users} 
                    comments={comments}
                />
            )}
        </ul>
    )
}