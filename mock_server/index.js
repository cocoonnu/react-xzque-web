// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const Koa = require('koa')
const Router = require('koa-router')
const routerOption = require('./router')

const app = new Koa()
const router = new Router()

routerOption.forEach(route => {
    const { url, method, response } = route

    router[method](url, async ctx => {
        ctx.body = await asyncGetRes(response, ctx)
    })
})

const asyncGetRes = async (fn, ...args) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(fn(...args)), 1200)
    })
}

app.use(router.routes())
app.listen(3001)
console.log('http://localhost:3001 服务接口已启动')