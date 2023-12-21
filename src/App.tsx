import { useState } from "react";
import "./app.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodo] = useState<Todo[]>([]);

  function todoAddHandler(text: string) {
    setTodo((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  }

  function TodoDeleteHandler(todoId: string) {
    setTodo(prevTodos=>{
      return prevTodos.filter(todo=>todo.id !== todoId)
    });
  }

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={TodoDeleteHandler} />
    </div>
  );
}

export default App;
