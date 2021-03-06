import { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';

// import ColorBox from './components/ColorBox';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostFiltersForm from './components/PostFiltersForm';
// import Clock from './components/Clock';

function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: 'Hanhiu' },
  //   { id: 2, title: 'Kim Chan' },
  //   { id: 3, title: 'Hoi An' },
  // ]);

  // // todolist
  // function handleTodoClick(todo) {
  //   const index = todoList.findIndex((x) => x.id === todo.id);
  //   console.log(index);

  //   const newTodoList = [
  //     ...todoList.slice(0, index),
  //     ...todoList.slice(index + 1),
  //   ];

  //   // Solution 2
  //   // const newTodoList = [...todoList];
  //   // newTodoList.splice(index, 1);

  //   setTodoList(newTodoList);
  // }

  // // todoform
  // function handleTodoFormSubmit(formValues) {
  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   };

  //   const newTodoList = [...todoList, newTodo];
  //   setTodoList(newTodoList);
  // }

  // postlist
  const [postList, setPostList] = useState([]);

  // useEffect(() => {
  //   async function getPostList() {
  //     try {
  //       const requestUrl =
  //         'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
  //       const response = await axios.get(requestUrl);

  //       const { data } = response.data;
  //       setPostList(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   getPostList();
  // }, []);

  const [pagination, setPagination] = useState({});

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });

  useEffect(() => {
    async function getPostList() {
      try {
        // _limit=10&_page=1
        const paramsString = queryString.stringify(filters);

        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await axios.get(requestUrl);

        const { data, pagination } = response.data;
        setPostList(data);
        setPagination(pagination); // 1 10 50
      } catch (error) {
        console.log(error);
      }
    }

    getPostList();
  }, [filters]);

  function onPageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFiltersChange(newFilters) {
    console.log(newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.q,
    });
  }

  return (
    <div className='App'>
      <h1>React Hooks Basic</h1>

      {/* <ColorBox /> */}

      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={onPageChange} />

      {/* <Clock /> */}
    </div>
  );
}

export default App;
