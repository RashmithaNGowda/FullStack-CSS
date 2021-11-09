import ListItem from "./ListItem";
import {useState} from 'react'

const Content=()=>{
  //keeps track of todo items
  const [items,setItems]=useState([])
  //house whatever text we add into the input box 
  const [value,setValue]=useState('')

  const handleSubmit= ()=>{
    //spread operator
    setItems(prev=>[...prev,value])
    setValue('')
    // console.log([...items,'hi'])
    // console.log(value)

  }

  const handleInput= (e)=>{
    setValue(e.target.value)
  }

  const handleDelete=(items)=>{
    setItems(prev=>prev.filter(i=> i !== items))
  }


    return(
      <>
         <h2>Todo</h2>
         <form>
           <input value={value}   onChange={handleInput}  type="text" />
           <button onClick={handleSubmit} type="button">Add</button>
         </form>
         <ul>
          {items.map(items =><li>{items}  <button  onClick={()=>{handleDelete(items)}}
            >Delete</button>  </li>)}
         </ul>

      </>
        
    );
}

export default Content;