const http=require('http')
console.log(http)

const server =http.createServer((request,response)=>{
    const path = request.url
    response.write('<h1>im heading</h1>')
    response.end()

})

// console.log(server)
server.listen(3000,()=>{
    console.log(`Server listening at Port : ${3000}`)
})
