const database=require('../database/db')
const express=require('express')
const { categories } = require('../database/db')
const {v4: uuidv4}=require('uuid');
const router =express.Router()

router.get('/all',(req,res)=>{
    try {
        res.status(200).json({
            categories:database.categories,
            message:"Successfully fetched categories",
            status:"SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            // if we use res.send(error.message) then the front end crashes so we use categories as null i.e,[]
            categories:[],
            message:error.message,
            status:"FAILED"
        })
    }
})
router.post('/add',(req,res)=>{
    try {
        const{name}=req.body

        let newCategory={
            name,
            id:uuidv4()
        }

        database.categories.push(newCategory)

        res.status(200).json({
            categories:categories,
            message:"Successfully fetched categories",
            status:"SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            // if we use res.send(error.message) then the front end crashes so we use categories as null i.e,[]
            category:[],
            message:error.message,
            status:"FAILED"
        })
    }

})

module.exports=router