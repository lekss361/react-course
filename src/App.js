import React, {useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";

function App() {
    const [likes, setLikes] = useState(5)



  return (
    <div className="App">
        <ClassCounter/>
        <ClassCounter/>
    </div>
  );
}

export default App;
