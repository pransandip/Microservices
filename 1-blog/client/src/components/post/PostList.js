import { useState, useEffect } from 'react'
import axios from 'axios'
import { CommentCreate } from '../comment/CommentCreate'
import { CommentList } from '../comment/CommentList'

export const PostList = () => {
    const [posts, setPosts] = useState({})

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts')
        console.log(res.data)
        setPosts(res?.data)
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    // create array of posts
    const renderedPosts = Object.values(posts).map(post => {
        return <div className="card" key={post.id} style={{ width: '30%', marginBottom: '20px' }}>
            <div className="card-body">
                <h3>{post.title}</h3>
                <hr />
                <CommentList postId={post.id} />
                <CommentCreate postId={post.id} />
            </div>
        </div>
    })

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>
}