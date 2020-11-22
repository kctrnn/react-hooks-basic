import { useState } from 'react';

import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Hanhiu' },
    { id: 2, title: 'Kim Chan' },
    { id: 3, title: 'Hoi An' },
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    console.log(index);

    const newTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];

    // Solution 2
    // const newTodoList = [...todoList];
    // newTodoList.splice(index, 1);

    setTodoList(newTodoList);
  }

  return (
    <div className='App'>
      <h1>React Hooks Basic</h1>

      {/* <ColorBox /> */}

      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
