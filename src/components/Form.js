import React from 'react';


const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
        //console.log(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText.trim() !== ''){
            setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}]);
            setInputText('');
        }
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <form>
            <input placeholder="Let's do something.." type="text" value={inputText} className="todo-input" onChange={ inputTextHandler }/>
            <button className="todo-button" type="submit" onClick={ submitTodoHandler }>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;