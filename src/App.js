import React, {useState} from "react";
import './Styles/App.css';
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/Button/MyButton";

function App() {
     const  [posts, setPosts] = useState([
                {id: 1, title: 'Javascript', body: 'Description'} ,
                {id: 2, title: 'Javascript2', body: 'Description'} ,
                {id: 3, title: 'Javascript3', body: 'Description'} ,

     ])

    return (
        <div className="App">
            <form>
                <input type="text" placeholder="Название"/>
                <input type="text" placeholder="Описание"/>
                <MyButton>Создать пост</MyButton>

            </form>
            <PostList posts={posts} title=" Список постов 1"/>
        </div>
    );
}


export default App;
