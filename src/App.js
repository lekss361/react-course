import React, {useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './Styles/App.css';
import PostItem from "./Components/PostItem";

function App() {
    const [value, setValue] = useState('text in input')


    return (
        <div className="App">
        <PostItem post={{id: 1, title: 'Javascript', body: 'Description'}}/>
        </div>
    );
}


export default App;
