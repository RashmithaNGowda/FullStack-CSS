const express=require('express')
const PORT=3000
const app = express()

const token="TOP_SECRET"

//middleware for req.body
app.use(express.json())

let products=[{name:"iPhone12 case",price:"999"},{name:"iPhone13 case",price:"1199"},{name:"iPhone13 pro case",price:"1499"}]
//public routes
//GET Route
//Sends products
app.get('/products',(req,res)=>{
    res.json({products})
})

//middleware for validation
const validator=(req,res,next)=>{
    const {name,price}=req.body

    if(!name||!price)res.json({error:"Validation failed"})
    else next()
}

//middleware not to add products by others but can only be added by admin in auth route
const isAuthorised=(req,res,next)=>{
    if(req.headers.authorisation===token)next()
    else res.json({error:"UnAuthorisation"})
}


//private route
//destructuring body
//adds the items
app.post('/products/add',validator,isAuthorised,(req,res)=>{
    const {name,price}=req.body
     products.push({
            name,
            price,
        })
       res.send({products})

    
})

//authentication route
app.post('/auth',(req,res)=>{
    const{email,password}=req.body
    if(email==='admin@gmail.com'&&password==='password'){
        res.send({token})
    }
    else{
        res.send({message:"UNAUTHORISED"})
    }   
})

//run server
app.listen(3000,()=>{
    console.log(`Server listening at Port : ${PORT}`)
})
