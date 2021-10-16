const express=require('express')
const PORT=3000
const app = express()
// console.log(express)

// const verify=(req,res,next)=>{
//     if(req.headers['user-agent']==="Thunder Client (https://www.thunderclient.io)") next()
//     else res.send(" sorryy!! BLOCKED")
// }

app.get('/public',(req,res)=>{
    res.send("This is PUBLIC ROUTE")
})
// authentication--------
const isAdmin=(req,res,next)=>{
    if(req.headers.admin==="true")next()
    else res.send("Sorry bruh! Not authorised Private Route")

}

app.get('/private',isAdmin,(req,res)=>{
    res.send("Authorized")
})

// app.get('/',verify,(req,res)=>{
//     // console.log(req.headers.host)
//     res.send(" GET it bruh")
//     // console.log(req)
 
// })

app.listen(3000,()=>{
    console.log(`Server listening at Port : ${PORT}`)
})