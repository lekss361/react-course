import React, {useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './Styles/App.css';

function App() {
    const [value, setValue] = useState('text in input')


    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>1. JavaScript</strong>
                    <div>
                        JavaScript-язык программирования
                    </div>
                </div>
                    <div className="post_btn">
                        <button>Удалить</button>
                </div>
            </div>
        </div>
    );
}


export default App;
