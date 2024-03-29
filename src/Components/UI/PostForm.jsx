import React from 'react';
import MyInput from "./Input/MyInput";
import MyButton from "./Button/MyButton";

const PostForm = () => {
    const [post, setPost] = useState({title: '', body: ''})

    return (
        <div>
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Название"
                />
                {/*Неуправляемы/Неконтролируемый*/}
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Описание"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>

            </form>
        </div>
    );
};

export default PostForm;