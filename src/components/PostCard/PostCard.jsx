import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { usePosts } from "../../hooks/usePosts"

export default function PostCard() {
    const { posts } = usePosts()
    const { postId } = useParams()
    const [post, setPost] = useState({})
    const history = useHistory()
    
    useEffect(() => {
        if(postId) {
            const postItem = posts.find(item => item.id === +postId)
            postItem ? setPost(postItem) : history.push('/404')
        }
    }, [postId])

    return (
        <div className="post_card">
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div>Comments: {post.comments?.length}</div>
        </div>
    )
}