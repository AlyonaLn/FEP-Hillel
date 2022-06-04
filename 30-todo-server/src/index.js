import TodoApi from './TodoApi';

import React from 'react';
import * as ReactDOM from 'react-dom/client';
import style from './style';


function Form ( {defaultMessage, onSubmit}) {
  const [message, setMessage] = React.useState([defaultMessage]);

  function onFormSubmit(e) {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <form onSubmit={onFormSubmit}>
    <input 
    id='msgInput' 
    type="text" 
    placeholder='Введите сообщение'
    value={message}
    onChange={onMessageChange}
    />
    <button id='msgButton'>Send</button>
    </form>
  )
}

function List ({list, onDelete, onStatusChange}) {
  return (
    <ul id="todoList">
      {list.map(todo => (
        <>
          <li 
          className={todo.status ? style.done : ''}
          onClick={() => onStatusChange(todo.id)}
          >
            {todo.title} 
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </li>
        </>
      ))}
    </ul>
  )
}

function useTodo (defaultList) {
  const [list, setList] = React.useState(defaultList);

  React.useEffect(() => {
    TodoApi.getList().then((res) =>{
      setList(res);
    })
  }, []);

function addTodo (message) {
  const todo = {title: message};

  TodoApi.create(todo).then((nevTodo) =>{
    setList([...list, newTodo])
  });
}

function deleteTodo(id) {
  TodoApi.delete(id).then((nevTodo) =>{
    const newList = list.filter(todo => todo.id !==id);
    setList([newList]);
  });
}

function changeStatus(id) {
  const currentTodo = list.find(todo => todo.id !==id);
  const updateTodo ={
    ...currentTodo,
    status: !currentTodo.status,
  } 

  TodoApi.update(id, updateTodo).then((nevTodo) =>{
    const newList = list.map(todo => todo.id === id? updateTodo : todo);
    setList([newList]);
  });
}

return {
  list,
  addTodo,
  deleteTodo,
  changeStatus,
};
}

function Todo({defaultMessage, defaultList}) {
  const [list, addTodo, deleteTodo, changeStatus] = useTodo(defaultList);

  return (
  <>
    <List 
    list={list}
    onDelete={deleteTodo}
    onStatusChange={changeStatus}
    />

    <Form 
    defaultMessage={defaultMessage}
    onSubmit={message => addTodo([message])}
    />
  </>
  );
}

function App (){
  return (<Todo defaultMessage={'xx'} defaultList={[]} />); 
}

ReactDOM.createRoot(document.querySelector('#app')).render(<App />);
