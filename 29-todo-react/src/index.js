import TodoApi from './TodoApi';
import React from 'react';
import * as ReactDOM from 'react-dom/client';


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

function List ({list}) {
  return (
    <ul id="todoList">
      {list.map(todo => (
        <>
        <li>{todo.title} <button  >Delete</button></li>
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

return {
  list,
  addTodo,
};
}

function Todo({defaultMessage, defaultList}) {
  const [list, addTodo] = useTodo(defaultList);

  return (
  <>
    <List list={list} />

    <Form 
    defaultMessage={defaultMessage}
    onSubmit={message => addTodo([message])}
    />
  </>

  );
}

function App (){
  return (<Todo defaultMessage={' '} defaultList={[]} />); 
}

ReactDOM.createRoot(document.querySelector('#app')).render(<App />);
