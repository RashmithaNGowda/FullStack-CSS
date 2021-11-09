import ListItem from "./ListItem";
import {useState} from 'react'

const Content=()=>{
  //  let  counter=0
  let [counter,setCounter]=useState(0)
  // console.log(counter)
  // console.log(mysteryfunc)


    return(
        <div className="container">
        <h2>{counter}</h2>
        <button  onClick={()=>{
         setCounter(previousValue=> previousValue+1)
        }}  >Click</button>
      </div>
    );
}

export default Content;