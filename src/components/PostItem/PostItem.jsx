
export default function PostItem({item, users, comments}) {

    return (
        <li className="post">
            <header>
                <h2 className="post_author">{item.user?.name}</h2>
            </header>
            <h3 className="post_title">{item.title}</h3>
            <p className="post_text">{item.body}</p>
            <footer>
                <p className="post_comments">Comments: {item.comments?.length}</p>
            </footer>
        </li>
    )
}