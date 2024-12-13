import  {     ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
 
type AddTodoProps = {
  onAddTodo: (todo: string) => void
}

function AddTodo({onAddTodo}:AddTodoProps) {
  const [text, setText] = useState<string>("");

  const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }
  
    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onAddTodo(text);
      setText("");
  }


  return (
    <form onSubmit={submitHandler} className="flex items-center">
      <Input
        value={text}
        onChange={changeEventHandler}
        type="text"
        placeholder="Add a todo"
        className="w-fit"
      />
      <Button>Add todo</Button>
    </form>
  );
}

export default AddTodo;
