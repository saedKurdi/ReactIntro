import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
let todos = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Redux" },
  { id: 3, title: "Learn React Hooks" },
  { id: 4, title: "Learn React Router" },
  { id: 5, title: "Learn React Context API" },
];
function App() {
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
}

export default App;
