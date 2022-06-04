import React from "react";

const todos = [{id: 1, title: 'xxx'}, {id: 2, title: 'yyy'}]

export default function TodoList(){
    return (
        <>
        <h1>TodoList Page</h1>
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
        </>
    );
}