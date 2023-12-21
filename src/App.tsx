import "./app.css";
import TodoList from "./components/TodoList";

function App() {
  const todos = [{ id: "t1", text: "Finish the course" }];

  return (
    <div>
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
