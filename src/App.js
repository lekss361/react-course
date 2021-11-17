import React, {useState} from "react";
import './Styles/App.css';
import PostList from "./Components/PostList";

function App() {
     const  [posts, setPosts] = useState([
                {id: 1, title: 'Javascript', body: 'Description'} ,
                {id: 2, title: 'Javascript2', body: 'Description'} ,
                {id: 3, title: 'Javascript3', body: 'Description'} ,

     ])

    return (
        <div className="App">
            <PostList posts={posts} title=" spisok postov 1"/>
        </div>
    );
}


export default App;
