import React, { useRef } from "react";

const NewTodo: React.FC = () => {

    const textInputRef = useRef<HTMLInputElement>(null);



  function todoSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText)
  }



  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">todo text</label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;