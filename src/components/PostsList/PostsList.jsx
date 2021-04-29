import PostItem from "../PostItem/PostItem"

export default function PostsList({posts, users}) {
    
    return (
        <ul>
            {posts.map(post => <PostItem key={post.id} item={post} users={users} />)}
        </ul>
    )
}