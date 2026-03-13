import {useState} from "react";
function Counter(){
    const [num,setNum]=useState(0)
//  const [l1,setL1] =usestate(0)
//variable,object,array
//usestate(true), usestate({key:value}),usesate([])
//second parameter acts as function---->will update the value


function increment1(){
    setNum(num+1)
}

function decrement1(){
    setNum(num-1)
}

var increment2 =()=>{
    setNum(num+1)
}

var decrement2 =()=>{
    setNum(num-1)
}

    return(
        <div>
            <h1>{num}</h1>
            <button onClick={
                 ()=>{
                    setNum(num+1);
                }
            }>INCREMENT</button>
            {/* 0=1=2=3 */}
             <button onClick={()=>{
                setNum(num-1)
             }}>decrement</button> <br/>

             <button onClick={increment1}>INCREMENT1</button>
            
             <button onClick={decrement1}>decrement1</button> <br/>

             <button onClick={increment2}>INCREMENT1</button>
            
             <button onClick={decrement2}>decrement1</button>
             
        </div>
    );
}export default Counter;

// hook

//hooks are inbuilt functions used for performing setof pre-defined actions
//useState====>hook---->function--->inbuilt function----->React

//js/jsx files--->basic structure
//hooks --->use state--->variable,object,array
//different ways of implementing logic
//Counter application using react
