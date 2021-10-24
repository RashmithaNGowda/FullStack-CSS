const database=require('../database/db')
const express=require('express')
const { categories } = require('../database/db')
const {v4: uuidv4}=require('uuid');
const router =express.Router()


/* 
ROUTE: http://localhost:3001/category/all
METHOD: GET
*/


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

/* 
ROUTE: http://localhost:3001/category/add
METHOD: POST
*/



router.post('/add',(req,res)=>{
   
        const{name}=req.body

        let newCategory={
           
            id:uuidv4(),
            name
        }
        try{
            let include=database.categories.find(item=>item.name === name)
            if(!include) database.categories.push(newCategory)
            else console.log('Already exists')
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

/* 
ROUTE: http://localhost:3001/category/delete
METHOD: DELETE
*/

router.delete('/delete/:id',(req,res)=>{
    try {
        // let element=database.categories.find(item=>item.id===id)
        // const index=database.categories.indexOf(element)
        // database.categories.splice(index,1)
        const {id}=req.params

        const newCategories=database.categories.filter(item=>item.id!==id)
        database.categories=newCategories
        console.log(newCategories)

        res.status(200).json({
            categories:database.categories,
            message:"Successfully removed categories",
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

/* 
ROUTE: http://localhost:3001/category/update/:id
METHOD:  PUT
*/
router.put('/update',(req,res)=>{
    
})




module.exports=router