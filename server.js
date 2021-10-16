// const http=require('http')
// console.log(http)

// const server =http.createServer((request,response)=>{
//     const path = request.url
//     response.write('<h1>im heading</h1>')
//     response.end()

// })

// // console.log(server)
// server.listen(3000,()=>{
//     console.log(`Server listening at Port : ${3000}`)
// })
const express=require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log(req.url)
    res.send("this is a response")

})
app.get('/login',(req,res)=>{
    res.send("this is a response to LOGIN")

})
app.get('/logout',(req,res)=>{
    res.send("this is a response to LOGOUT")

})

app.listen(3000,()=>{
    console.log(`Server listening at Port : ${3000}`)
})