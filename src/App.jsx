import AddTodo from './AddToDo.jsx';
import TodoList from './TodoList.jsx';

function App() {
  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Список справ</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;