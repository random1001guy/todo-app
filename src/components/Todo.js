import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    
    const deleteHandler = () => {
        setTodos(todos.filter( (el) => (el.id !== todo.id) ));
        //console.log(todos, todo);
    };

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {...item, completed: !item.completed};
                }
                return item;
            })
        );
    };

    return(
        <div className={`todo ${todo.completed ? "completed" : null}`}>
            <li className={`todo-item `}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;