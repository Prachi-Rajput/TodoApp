import React from "react";
import Todos from "./components/Todo";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className='text-center'> Todo React App</h1>
        <Todos/>
        {/* <ClassCounter />
        <FunctionCounter /> */}
      </div>
    );
  }
}

export default App;
