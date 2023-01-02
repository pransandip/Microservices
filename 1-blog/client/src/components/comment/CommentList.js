// import { useState, useEffect } from 'react'
// import axios from 'axios'

export const CommentList = ({ comments }) => {

    // const [comments, setComments] = useState([])

    // const fetchComments = async () => {
    //     const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
    //     setComments(res?.data)
    // }

    // useEffect(() => {
    //     fetchComments();
    // }, [])


    const renderedComments = comments.map(comment => {
        let content;

        if (comment.status === 'approved') {
            content = comment.content;
        }

        if (comment.status === 'pending') {
            content = <p style={{ fontSize: '15px', backgroundColor: 'skyblue' }}>This comment is awaiting moderation</p>;
        }

        if (comment.status === 'rejected') {
            content = <p style={{ fontSize: '15px', backgroundColor: 'yellow', textDecoration: 'line-through' }}>This comment has been rejected</p>;
        }
        return <li key={comment.id}>{content}</li>
    })

    return (
        <ol>
            {renderedComments}
        </ol>
    )
};