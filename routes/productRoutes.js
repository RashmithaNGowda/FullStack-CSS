const database=require('../database/db')
const express=require('express')
const { products } = require('../database/db')
const {v4: uuidv4}=require('uuid');
const router =express.Router()


/* 
ROUTE: http://localhost:3001/products/all
METHOD: GET
*/


router.get('/all',(req,res)=>{
    try {
        res.status(200).json({
            products:database.products,
            message:"Successfully fetched categories",
            status:"SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            // if we use res.send(error.message) then the front end crashes so we use categories as null i.e,[]
            products :[],
            message:error.message,
            status:"FAILED"
        })
    }
})


router.post('/add',(req,res)=>{
    const {name,price,category}=req.body

    if(!database.categories.find(items=>items.name===category)){
        //create a category if it doesn't already exist
        let newCategory={ name:category,id:uuidv4()}
        database.categories.push(newCategory)

        //create a product & add it
        const newProduct={
            id:uuidv4(),
            name,price,category:category
        }
        database.products.push(newProduct)
    }else{
        const newProduct={
            id:uuidv4(),
            name,price,category:category
        }
        database.products.push(newProduct)

    }

    try {
        res.status(200).json({
            products:database.products,
            message:"Successfully fetched categories",
            status:"SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            // if we use res.send(error.message) then the front end crashes so we use categories as null i.e,[]
            products :[],
            message:error.message,
            status:"FAILED"
        })
    }
})



module.exports=router