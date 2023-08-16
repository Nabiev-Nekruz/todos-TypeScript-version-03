import React, { ChangeEvent, useState } from 'react'
import { ITodo } from './types'
import Todo from './Todo/Todo'
import FormTodo from './Form Todo/FormTodo'

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const Todos = () => {
  // ARR OBJ TODOS
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: "One",
      complete: false,
    },
    {
      id: 2,
      title: "Two",
      complete: false,
    },
  ]);

  ///modal//text//id
  const [modal, setModal] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [idx, setIdx] = useState<number | null>(null);

  //onEdit

  const onEdit = (todo: ITodo) => {
    setModal(true);
    setText(todo.title);
    setIdx(todo.id);
  };

  //editTodo
    
    const editTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (text.trim().length == 0) {
            return alert("HOOOOOOOO")
        }
        else {
                    let updateTodos : ITodo[] = [...todos].map((e:ITodo) => {
                      if (idx === e.id) {
                        e.title = text;
                      }
                      return e;
                    });
                    setTodos(updateTodos);
                    setModal(false);
        }
    };

  //event//
  const handleEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  // On Delete
  const onDelete = (id: number) => {
    const updateTodos: ITodo[] = [...todos].filter((todo: ITodo) => {
      return todo.id !== id;
    });
    setTodos(updateTodos);
  };
  // On Complete
  const onComplete = (id: number, complete: boolean) => {
    const updateTodos: ITodo[] = [...todos].map((todo: ITodo) => {
      if (todo.id === id) todo.complete = complete;
      return todo;
    });
    setTodos(updateTodos);
  };
  // Add Todo
  const addTodo = (event: React.FormEvent<HTMLFormElement>, title: string) => {
    event.preventDefault();
    if (title.trim().length == 0) {
      return alert("NOOOOOOOOO SIUUUUUUU")
    }
    else {
      const todo: ITodo = {
        id: Date.now(),
        title: title,
        complete: false,
      };
      setTodos((prev: ITodo[]) => [...prev, todo]);
    }
  };

  return (
    <div>
      <h1>Todos</h1>
      {/* Form Add */}
      <FormTodo addTodo={addTodo} />
      {todos.map((todo: ITodo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={() => onDelete(todo.id)}
            onEdit={() => onEdit(todo)}
            onComplete={(complete) => onComplete(todo.id, complete)}
          />
        );
      })}
      {modal ? (
        <Dialog open={modal} aria-describedby="alert-dialog-slide-description">
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <form onSubmit={editTodo}>
              <input
                type="text"
                value={text}
                name="nabi"
                onChange={handleEvent}
                id=""
              />
              <button>Submit</button>
            </form>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      ) : null}
    </div>
  );
}

export default Todos