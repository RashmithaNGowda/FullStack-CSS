const express=require('express')
const database=require('./database/db')
const app=express()
const PORT=3001
const categoryRoutes=require('./routes/categoryRoutes')

console.log(categoryRoutes.stack)

app.use(express.json())
//http://3001/categories/Routes
app.use('/categories',categoryRoutes)

app.get('/',(req,res)=>{
       try {
        console.log(document)
    } catch (error) {
        res.status(200).send(error.message)

    }
})

app.listen(PORT,()=>{
    console.log(`Server listening at Port : ${PORT}`)
})

