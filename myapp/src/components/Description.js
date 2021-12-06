import Enhancer from "../HOC/Enhancer";

const Description= ({heading}) =>{
    console.log(heading)
    return(
        <div>
            <h1>{heading}</h1>
            <h3>This is a heading</h3>
            
            <div>lorem...Holaaa Im Rashmitha N gowda </div>
            <h4>-----------------------------------------</h4>

        </div>
    );

}
export default Enhancer(Description);
