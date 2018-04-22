const Koa = require('koa')
const app = new Koa()
app.use(async ctx => {
  ctx.body = 'Hello world from Nigeria'
})

app.listen(3000, () => {
  console.log('we are listening on port 3000')
})
