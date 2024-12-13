import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
 
type Todos = {
  id: string,
  text: string
}
function App() {
  const [todos,setTodos]=useState<Todos[]>([])

  const addTodoHandler = (text: string) => {
    const id =Math.random().toString()
    setTodos([...todos,{id,text}])
    
  }

  const removeTodoHandler = (id: string) => {
    setTodos(todos.filter((todo: Todos) => todo.id !== id));
  };

  return (
    <>
      <main className="my-10 max-w-6xl mx-auto">
        <AddTodo onAddTodo={addTodoHandler} />
        <TodoList onRemoveTodo={removeTodoHandler} items={todos}/>
      </main>
    </>
  );
}

export default App;
