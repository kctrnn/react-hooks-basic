# React Hooks Basic

0. Setup project

- Reactjs code snippets
- node-sass

### useState()

- useState() giúp functional component có thể dùng state

- useState() trả về một mảng 2 phần từ [name, setName]

- useState() áp dụng replacing thay vì merging như bên class component

- Init state callback chỉ thực thi 1 lần đầu

1. ColorBox
2. TodoList - list and delete
3. TodoForm - add new todo

### useEffect()

```
MOUNTING
- rendering
- run useEffect()
UPDATING
- rendering
- run `useEffect() cleanup` nếu dependencies thay đổi.
- run `useEffect()` nếu dependencies thay đổi.
UNMOUNTING
- run `useEffect() cleanup`.
```

```js
function App() {
  const [filters, setFilters] = useState();
  // No dependencies defined
  useEffect(() => {
    // EVERY
    // Always execute after every render
    return () => {
      // Execute before the next effect or unmount.
    };
  });

  // Empty dependencies
  useEffect(() => {
    // ONCE
    // Only execute once after the FIRST RENDER
    return () => {
      // Execute once when unmount
    };
  }, []);

  // Has dependencies
  useEffect(() => {
    // On demand
    // Only execute after the first RENDER or filters state changes
    return () => {
      // Execute before the next effect or unmount.
    };
  }, [filters]);
}
```

```js
class App extends PureComponent {
  componentDidMount() {
    console.log('Component Did Mount');
  }
  componentWillUnmount() {
    console.log('Component Will Unmount');
  }
}

// viết lại tương đương với hooks
function App() {
  useEffect(() => {
    console.log('Component Did Mount');
    return () => {
      console.log('Component Will Unmount');
    };
  }, []);
}
```

```js
class App extends PureComponent {
  componentDidMount() {
    console.log('Component Did Mount or Did Update');
  }
  componentDidUpdate() {
    console.log('Component Did Mount or Did Update');
  }
}

// viết lại tương đương với hooks
function App() {
  useEffect(() => {
    console.log('Component Did Mount or Did Update');
  });
}
```

1. PostList - Call API with useEffect hooks
2. Pagination
