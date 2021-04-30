
export default function PostItem({item, users, comments}) {

    const author = users.find(user => item.userId === user.id)
    const commentsArray = comments.filter(comment => comment.postId === item.id)

    return (
        <li className="post">
            <header>
                <h2 className="post_author">{author.username}</h2>
            </header>
            <h3 className="post_title">{item.title}</h3>
            <p className="post_text">{item.body}</p>
            <footer>
                <p className="post_comments">Comments: {commentsArray.length}</p>
            </footer>
        </li>
    )
}