import { useState } from 'react'
import axios from 'axios'

export const PostCreate = () => {
    const [title, setTitle] = useState('')

    const formSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/posts', {
            title
        })
        setTitle('')
    }

    return <div>
        <form onSubmit={formSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary">Post</button>
        </form>
    </div>
}