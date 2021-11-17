import React, {useRef, useState} from "react";
import './Styles/App.css';
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/Button/MyButton";
import MyInput from "./Components/UI/Input/MyInput";
import PostForm from "./Components/UI/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript2', body: 'Description'},
        {id: 3, title: 'Javascript3', body: 'Description'},

    ])


    const addNewPost = (e) => {
        e.preventDefault()


        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

    return (
        <div className="App">
            <PostForm/>
            <PostList posts={posts} title=" Список постов 1"/>
        </div>
    );
}


export default App;
