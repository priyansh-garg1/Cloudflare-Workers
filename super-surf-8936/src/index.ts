import { Hono } from 'hono'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/test2', (c) => {
  return c.text('Hello Hono!')
})

app.post('/test-post', (c) => {
  return c.text('Hello Hono!')
})
app.get('/test', (c) => {
  return c.json({
    message: 'Hello Hono!',
    data: {
      "name": "John Doe",
      "age": 25
    }
  })
})

export default app
