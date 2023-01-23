import express from 'express'
import 'express-async-errors'
import mongoose from 'mongoose';
import cors from 'cors'

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.all('*', async (req, res) => {
    throw new NotFoundError();
})

app.use(errorHandler)

const start = async () => {
    try {
        await mongoose.connect(
            'mongodb://auth-mongo-srv:27017/auth'
        )
        console.log('Successfully connected to the MongoDB database.')

    } catch (err) {
        console.log(err)
    }

    app.listen(3000, () => {
        console.log('Auth:server Listening on port 3000')
    })
}

start();
