import React from "react";
function FunctionCounter() {
    //initial state
    // state={
    //     counter:0
    // }

    // fitst value is your state
    // second value is how to update
    let [counter, setCounter] = React.useState(0);
    const [name, setName] = React.useState("");

    const onIncrementClick =()=>{
        //update state
        setCounter(++counter)
    }
    return (
        <>
        {/* // reading state */}
        <p>Function component : {counter}</p>
        <button className="btn btn-danger" onClick={()=>onIncrementClick()}>Increment counter</button>
        </>
    )
}

export default FunctionCounter;
