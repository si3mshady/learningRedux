import React, { useEffect, useState } from 'react'

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getTestData = async () => {

            const url = 'https://jsonplaceholder.typicode.com/posts'
            const res = await fetch(url)
            const data = await res.json()
            console.log(setPosts(data))
        }

        getTestData()
       
    },[])
    return (
        <div className='posts'>
                <h1>POSTS</h1>
                {posts.map(post => (
                    <div key={post.id}>
                    <h2 >{post.title}</h2>
                    <p>{post.body}</p>

                    </div>
                   
                ))}            
        </div>
    )
}
