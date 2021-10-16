const http=require('http')
console.log(http)

const server =http.createServer((request,response)=>{
    
    console.log(request)
    console.log(request.url)
    console.log(request.headers)
    console.log(request.method)



})

// console.log(server)
server.listen(3000,()=>{
    console.log(`server listening at port ${3000}`)
})
