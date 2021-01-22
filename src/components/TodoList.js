import React from "react";
//importing components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, status }) => {
    todos.sort((a,b) => (a.completed) ? ((b.completed) ? 0 : 1)  : ((b.completed) ? -1 : 0));
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.flatMap( (todo) => {
                    if(status === 'all')
                        return <Todo status={status} key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} />;
                    else if(status === 'completed')
                        if(todo.completed){
                            return <Todo status={status} key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} />;
                        }
                        else 
                            return [];
                    else 
                        if(!todo.completed){
                            return <Todo status={status} key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} />;
                        }
                        else
                            return [];
                    
                }
                )}
            </ul>
        </div>
    );
};

export default TodoList;