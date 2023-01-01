const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const posts = Object.create({})

app.get('/posts', (req, res) => {
    res.send(posts)
});

app.post('/events', (req, res) => {
    const { type, data } = req.body;

    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }

    if (type === 'CommentCreated') {
        const { id, content, postId } = data;
        const post = posts[postId];
        post.comments.push({ id, content })
    }
    console.log(posts)
    res.status(201).send({})
});

app.listen(4002, () => {
    console.log('query:server Listening on port 4002')
})