import { useState } from 'react'
import axios from 'axios'

export const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('')

    const formSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        })
        setContent('')
    }

    return <div>
        <form onSubmit={formSubmit}>
            <div className="form-group">
                <p>New Comment</p>
                <input value={content} onChange={e => setContent(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>;
}