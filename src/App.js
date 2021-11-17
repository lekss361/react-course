import React, {useState} from "react";
import './Styles/App.css';
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/Button/MyButton";
import MyInput from "./Components/UI/Input/MyInput";

function App() {
     const  [posts, setPosts] = useState([
                {id: 1, title: 'Javascript', body: 'Description'} ,
                {id: 2, title: 'Javascript2', body: 'Description'} ,
                {id: 3, title: 'Javascript3', body: 'Description'} ,

     ])

    const [title, setTitle] = useState('')
    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
    }

    return (
        <div className="App">
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={title}
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Название"/>
                <MyInput type="text" placeholder="Описание"/>
                <MyButton onClick={addNewPost} >Создать пост</MyButton>

            </form>
            <PostList posts={posts} title=" Список постов 1"/>
        </div>
    );
}


export default App;
