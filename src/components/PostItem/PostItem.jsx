
export default function PostItem({item}) {
    
    return (
        <li className="post">
            <h3 className="post_title">{item.title}</h3>
            <p className="post_text">{item.body}</p>
        </li>
    )
}