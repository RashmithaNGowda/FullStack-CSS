import {useSelector} from "react-redux";

const Two =()=>{
    const state =useSelector(state=>state)
    console.log(state)
    return(
        <div>
            <h1>Iam heading Two</h1>
        </div>
    );
}
export default Two;
