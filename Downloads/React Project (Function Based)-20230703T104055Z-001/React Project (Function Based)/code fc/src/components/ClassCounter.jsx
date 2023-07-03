import React from "react";
class ClassCounter extends React.Component {
    //initial state
    state={
        counter:0
    }
    onIncrementClick =()=>{
        //update state
        this.setState({
            counter:++this.state.counter
        })
    }
  render() {
    return (
        <>
        {/* // reading state */}
        <p>Class component : {this.state.counter}</p>
        <button className="btn btn-danger" onClick={()=>this.onIncrementClick()}>Increment counter</button>
        </>
    )
  }
}

export default ClassCounter;
