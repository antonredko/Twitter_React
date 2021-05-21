import { Input } from "antd";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { usePosts } from "../../hooks/usePosts";

export default function UserCard() {
    const { posts } = usePosts()
    // const { userId } = useParams()
    // const [userName, setUserName] = useState('')
    // const [userUsername, setUserUsername] = useState('')
    // const [userEmail, setUserEmail] = useState('')
    
    // useEffect(() => {
    //     if(posts.id) {
            // const user = users.find(user => user?.id === +userId)
    //         setUserName(posts.name)
    //         setUserUsername(posts.username)
    //         setUserEmail(posts.email)
    //     }
    // }, [posts.user.id])
    
    
    return (
        <>
            {/* <Input addonBefore="Name" value={posts.name} readOnly />
            <Input addonBefore="Username" value={posts.username} readOnly />
            <Input addonBefore="Email" value={posts.email} readOnly />
            <Input addonBefore="Website" value={posts.website} readOnly />
            <Input addonBefore="Phone" value={posts.phone} readOnly /> */}
        </>
    )
}


// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }