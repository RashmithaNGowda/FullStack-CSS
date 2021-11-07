const Content=()=>{
    const chores=["Item 1","Item 2","Item 3","Item 4"]

    return(
        <div className="container">
        <ul>
        {
        chores.map(chore=><li>{chore}</li>)
        }

        </ul>
      </div>
    );
}

export default Content;