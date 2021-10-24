const express=require('express')
const { products } = require('./database/db')
const database=require('./database/db')
const app=express()
const PORT=3001
const categoryRoutes=require('./routes/categoryRoutes')
const productRoutes=require('./routes/productRoutes')


// console.log(categoryRoutes.stack)

app.use(express.json())

//http://3001/category/Routes
app.use('/category',categoryRoutes)

//http://3001/products/Routes
app.use('/products',productRoutes)


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

