const fs =require('fs')

fs.readFile('./test.txt',(error,data)=>{
    if(error)console.log(error)
    else console.log(typeof data)
  
})
