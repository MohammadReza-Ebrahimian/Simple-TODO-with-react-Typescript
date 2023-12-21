import "./app.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
  const todos = [{ id: "t1", text: "Finish the course" }];

  return (
    <div>
      <NewTodo/>
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
