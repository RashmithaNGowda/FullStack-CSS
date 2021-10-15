const fs =require('fs')

fs.writeFile('./test.txt',` ${fs.readFileSync('./test.txt')} append mee plzz  `,(error)=>{
    if(error)console.log(error)

  
})



// console.log(fs.readFileSync('./test.txt','utf8')
// )

console.log(`im a random log`)