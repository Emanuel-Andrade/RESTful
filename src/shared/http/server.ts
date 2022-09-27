import express from 'express'
import cors from 'cors'
import { load } from 'node_modules/ts-dotenv/index'
import routes from './routes';

const app = express()
const env = load({
  PORT: String,
  DATABASE_USERNAME: String,
  DATABASE_PASSWORD: String,
  DATABASE_DATABASE: String,
});

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(env.PORT, ()=>{
  console.log(`server is running on ${env.PORT}`)
})

