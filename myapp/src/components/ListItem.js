const ListItem=({chore})=>{
    
    return(
        <li>
            <div>
              {chore}          
              <button style={{background:"crimson",color:"white"}}>Delete</button>
      
            </div> 
   


        </li>
    );
}

export default ListItem;