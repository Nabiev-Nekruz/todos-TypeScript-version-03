import React from "react";
import { ITodoProps } from "../types";

const Todo = ({ todo, onDelete, onComplete, onEdit }: ITodoProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onComplete(event.target.checked);
        }}
      />
      <span>{todo.complete ? <s>{todo.title}</s> : todo.title}</span>
      <button onClick={onDelete}>delete</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default Todo;
