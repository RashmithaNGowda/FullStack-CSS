// const http=require('http')
// const fs=require('fs')
// const path=require('path')


// const server =http.createServer((request,response)=>{
//     // console.log(request.url)
//     // console.log(request.headers)
//     // console.log(request.method)
//     // const path=request.url
//     // response.write(`Hey...This is Rashmitha,You made a request to ${path}`)
//     const markup=fs.readFileSync(path.resolve('./index.html'))
//     response.write(markup)
//     response.end()


// })

// // console.log(server)

// server.listen(3000,()=>{
//     console.log(`server listening at port: ${3000}`) 
// })
const express=require('express')
const app=express()

app.get('/login',(req,res)=>{
    console.log(req.url)
    res.send("This is  login")

})
app.get('/signup',(req,res)=>{
    console.log(req.url)
    res.send("This is signup")

})

app.listen(3000,()=>{
    console.log("server listening at port 3000")
})